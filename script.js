class ChatApp {
  constructor() {
    // Configuration
    this.config = {
      apis: [
        {
          name: "gemini",
          url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
          apiKey: "AIzaSyAU4t95oscDd4s-J4QkYF70RpxHrTs4HJ0",
          headers: (apiKey) => ({
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          }),
          prepareBody: (message, language) => ({
            contents: [
              {
                parts: [
                  {
                    text: message,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2048,
            },
            safetySettings: [
              {
                category: "HARM_CATEGORY_HARASSMENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE",
              },
              {
                category: "HARM_CATEGORY_HATE_SPEECH",
                threshold: "BLOCK_MEDIUM_AND_ABOVE",
              },
            ],
          }),
          parseResponse: (data) => {
            if (
              data.candidates &&
              data.candidates[0] &&
              data.candidates[0].content
            ) {
              return data.candidates[0].content.parts[0].text;
            }
            throw new Error("Invalid response format");
          },
        },
      ],
      supportedLanguages: ["en", "th"],
      defaultLanguage: "th",
      maxRetries: 3,
      retryDelay: 1000,
    };

    // State
    this.state = {
      conversations:
        JSON.parse(localStorage.getItem("chat_conversations")) || {},
      currentChatId: null,
      theme: localStorage.getItem("chat_theme") || "light",
      language:
        localStorage.getItem("chat_language") || this.config.defaultLanguage,
      isProcessing: false,
      retryCount: 0,
      currentApiIndex: 0,
    };

    // DOM Elements
    this.elements = {
      chatForm: document.getElementById("chat-form"),
      userInput: document.getElementById("userInput"),
      chatContainer: document.getElementById("chatContainer"),
      sidebar: document.querySelector(".sidebar"),
      menuToggle: document.querySelector(".menu-toggle"),
      themeToggle: document.querySelector(".theme-toggle"),
      newChatBtn: document.querySelector(".new-chat"),
      clearConversationsBtn: document.querySelector(".clear-conversations"),
      chatHistory: document.querySelector(".chat-history"),
    };

    this.loadPrismJS();
    this.initialize();
  }

  initialize() {
    this.setupEventListeners();
    this.initializeTheme();
    this.loadConversations();

    // ตรวจสอบว่ามีประวัติการสนทนาหรือไม่
    if (Object.keys(this.state.conversations).length === 0) {
      this.startNewChat(); // สร้าง New Chat เฉพาะเมื่อไม่มีประวัติการสนทนา
    } else {
      // ถ้ามีประวัติ ให้โหลดการสนทนาล่าสุด
      const lastChatId = Object.keys(this.state.conversations).pop();
      this.loadChat(lastChatId);
    }
  }

  setupEventListeners() {
    // Form submission
    this.elements.chatForm.addEventListener("submit", (e) =>
      this.handleSubmit(e)
    );

    // Textarea auto-resize
    this.elements.userInput.addEventListener("input", () =>
      this.autoResizeTextarea()
    );

    // Theme toggle
    this.elements.themeToggle.addEventListener("click", () =>
      this.toggleTheme()
    );

    // Menu toggle for mobile
    this.elements.menuToggle.addEventListener("click", () =>
      this.toggleSidebar()
    );

    // New chat button
    this.elements.newChatBtn.addEventListener("click", () =>
      this.startNewChat()
    );

    // Clear conversations
    this.elements.clearConversationsBtn.addEventListener("click", () =>
      this.clearConversations()
    );
  }

  initializeTheme() {
    document.body.classList.toggle("dark-theme", this.state.theme === "dark");
    this.elements.themeToggle.querySelector("i").className =
      this.state.theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }

  toggleTheme() {
    this.state.theme = this.state.theme === "light" ? "dark" : "light";
    localStorage.setItem("chat_theme", this.state.theme);
    this.initializeTheme();
  }

  toggleSidebar() {
    document.querySelector(".app-container").classList.toggle("sidebar-open");
  }

  autoResizeTextarea() {
    const textarea = this.elements.userInput;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }

  generateChatId() {
    return `chat_${Date.now()}`;
  }

  startNewChat() {
    // เช็คว่าถ้ามี chat ว่างอยู่แล้ว ไม่ต้องสร้างใหม่
    const currentChat = this.state.conversations[this.state.currentChatId];
    if (
      this.state.currentChatId &&
      (!currentChat || currentChat.length === 0)
    ) {
      return; // ไม่ต้องสร้าง chat ใหม่ถ้ามี chat ว่างอยู่แล้ว
    }

    this.state.currentChatId = this.generateChatId();
    this.state.conversations[this.state.currentChatId] = [];
    this.saveConversations();
    this.updateChatHistory();
    this.clearChatContainer();
  }

  // เพิ่มเมธอดใหม่เหล่านี้ต่อจาก constructor
  loadPrismJS() {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js";
    script.onload = () => {
      this.loadPrismLanguage("javascript");
      this.loadPrismLanguage("python");
      this.loadPrismLanguage("css");
      this.loadPrismLanguage("html");
    };
    document.head.appendChild(script);
  }

  loadPrismLanguage(language) {
    const script = document.createElement("script");
    script.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${language}.min.js`;
    document.head.appendChild(script);
  }

  clearChatContainer() {
    this.elements.chatContainer.innerHTML = `
        <div class="welcome-screen">
          <h2>AI Assistant</h2>
          <p>How can I help you today?</p>
          <div class="example-prompts">
            <div class="prompt-card">
              <h3>"Explain quantum computing"</h3>
              <p>Get simple explanations for complex topics</p>
            </div>
            <div class="prompt-card">
              <h3>"Debug my Python code"</h3>
              <p>Get help with programming and technical tasks</p>
            </div>
            <div class="prompt-card">
              <h3>"Write a blog post about AI"</h3>
              <p>Get creative writing and content assistance</p>
            </div>
            <div class="prompt-card">
              <h3>"Help me learn Thai"</h3>
              <p>Get language learning support and practice</p>
            </div>
          </div>
        </div>
      `;
  }

  loadConversations() {
    this.updateChatHistory();

    // ถ้ามี currentChatId ให้โหลดการสนทนานั้น
    if (
      this.state.currentChatId &&
      this.state.conversations[this.state.currentChatId]
    ) {
      this.loadChat(this.state.currentChatId);
    }
  }

  updateChatHistory() {
    const chatHistory = this.elements.chatHistory;
    chatHistory.innerHTML = "";

    Object.entries(this.state.conversations)
      .reverse()
      .forEach(([chatId, messages]) => {
        const chatButton = document.createElement("button");
        chatButton.className = "chat-button";

        // เพิ่ม active class ถ้าเป็น chat ปัจจุบัน
        if (chatId === this.state.currentChatId) {
          chatButton.classList.add("active");
        }

        chatButton.innerHTML = `
                <i class="fas fa-message"></i>
                <span>${this.getChatTitle(messages)}</span>
            `;
        chatButton.addEventListener("click", () => this.loadChat(chatId));
        chatHistory.appendChild(chatButton);
      });
  }

  getChatTitle(messages) {
    if (messages.length === 0) return "New Chat";
    const firstMessage = messages[0];
    const title = firstMessage.content.substring(0, 30);
    return title.length < firstMessage.content.length ? title + "..." : title;
  }

  loadChat(chatId) {
    this.state.currentChatId = chatId;
    this.elements.chatContainer.innerHTML = "";

    this.state.conversations[chatId].forEach((message) => {
      this.appendMessage(message.role, message.content);
    });

    this.scrollToBottom();
  }

  clearConversations() {
    if (
      confirm(
        this.state.language === "th"
          ? "คุณแน่ใจหรือไม่ที่จะลบประวัติการสนทนาทั้งหมด?"
          : "Are you sure you want to clear all conversations?"
      )
    ) {
      this.state.conversations = {};
      localStorage.removeItem("chat_conversations");
      this.startNewChat();
    }
  }

  appendMessage(role, content) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${role}-message`;

    const iconDiv = document.createElement("div");
    iconDiv.className = "message-icon";
    iconDiv.innerHTML =
      role === "user"
        ? '<i class="fas fa-user"></i>'
        : '<i class="fas fa-robot"></i>';

    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content markdown-content";

    // Process content for code blocks
    const processedContent = this.processMessageContent(content);
    contentDiv.innerHTML = processedContent;

    messageDiv.appendChild(iconDiv);
    messageDiv.appendChild(contentDiv);

    this.elements.chatContainer.appendChild(messageDiv);

    // Initialize code blocks
    this.initializeCodeBlocks(messageDiv);
  }

  processMessageContent(content) {
    const parts = content.split(/(```[\s\S]*?```)/g);

    return parts
      .map((part) => {
        if (part.startsWith("```")) {
          return this.createCodeBlock(part);
        }
        return this.escapeHTML(part);
      })
      .join("");
  }

  createCodeBlock(codeBlock) {
    const match = codeBlock.match(/```(\w+)?\n([\s\S]*?)```/);
    if (!match) return codeBlock;

    const language = match[1] || "plaintext";
    const code = match[2].trim();

    return `
        <div class="code-block">
            <div class="code-header">
                <span class="code-language">${language}</span>
                <button class="copy-button" data-code="${this.escapeHTML(
                  code
                )}">
                    <i class="fas fa-copy"></i> Copy
                </button>
            </div>
            <pre class="code-content"><code class="language-${language}">${this.escapeHTML(
      code
    )}</code></pre>
        </div>
    `;
  }

  initializeCodeBlocks(container) {
    if (window.Prism) {
      Prism.highlightAllUnder(container);
    }

    container.querySelectorAll(".copy-button").forEach((button) => {
      button.addEventListener("click", () => this.handleCodeCopy(button));
    });
  }

  async handleCodeCopy(button) {
    const code = button.dataset.code;
    try {
      await navigator.clipboard.writeText(code);

      button.innerHTML = '<i class="fas fa-check"></i> Copied!';
      button.classList.add("copied");

      setTimeout(() => {
        button.innerHTML = '<i class="fas fa-copy"></i> Copy';
        button.classList.remove("copied");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
      button.innerHTML = '<i class="fas fa-times"></i> Error';
      setTimeout(() => {
        button.innerHTML = '<i class="fas fa-copy"></i> Copy';
      }, 2000);
    }
  }

  escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  showTypingIndicator() {
    const typingDiv = document.createElement("div");
    typingDiv.className = "message assistant-message typing";
    typingDiv.innerHTML = `
        <div class="message-icon">
          <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
          <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      `;
    this.elements.chatContainer.appendChild(typingDiv);
    return typingDiv;
  }

  saveMessage(userMessage, assistantMessage) {
    if (!this.state.conversations[this.state.currentChatId]) {
      this.state.conversations[this.state.currentChatId] = [];
    }

    this.state.conversations[this.state.currentChatId].push(
      { role: "user", content: userMessage },
      { role: "assistant", content: assistantMessage }
    );

    this.saveConversations();
    this.updateChatHistory();
  }

  saveConversations() {
    localStorage.setItem(
      "chat_conversations",
      JSON.stringify(this.state.conversations)
    );
  }

  scrollToBottom() {
    this.elements.chatContainer.scrollTop =
      this.elements.chatContainer.scrollHeight;
  }

  async getAIResponse(message) {
    this.state.isProcessing = true;
    const api = this.config.apis[this.state.currentApiIndex];

    try {
      const response = await fetch(api.url + "?key=" + api.apiKey, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(api.prepareBody(message, this.state.language)),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error Details:", errorData);
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return api.parseResponse(data);
    } catch (error) {
      console.error("API call failed:", error);
      throw error;
    } finally {
      this.state.isProcessing = false;
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (this.state.isProcessing) return;

    const message = this.elements.userInput.value.trim();
    if (!message) return;

    // Clear input and resize
    this.elements.userInput.value = "";
    this.autoResizeTextarea();

    // Remove welcome screen if it exists
    const welcomeScreen =
      this.elements.chatContainer.querySelector(".welcome-screen");
    if (welcomeScreen) {
      welcomeScreen.remove();
    }

    this.appendMessage("user", message);
    const typingIndicator = this.showTypingIndicator();

    try {
      const response = await this.getAIResponse(message);
      typingIndicator.remove();
      this.appendMessage("assistant", response);
      this.saveMessage(message, response);
    } catch (error) {
      typingIndicator.remove();
      const errorMessage = this.getErrorMessage(error);
      this.appendMessage("assistant", errorMessage);
    }

    this.scrollToBottom();
  }

  getErrorMessage(error) {
    const errorStr = error.toString().toLowerCase();

    if (errorStr.includes("401")) {
      return this.state.language === "th"
        ? "API Key ไม่ถูกต้อง กรุณาตรวจสอบการตั้งค่า API Key ของ Gemini"
        : "Invalid API Key. Please check your Gemini API Key configuration";
    }

    if (errorStr.includes("quota") || errorStr.includes("429")) {
      return this.state.language === "th"
        ? "ขออภัย ระบบกำลังมีการใช้งานมาก กรุณารอสักครู่แล้วลองใหม่อีกครั้ง (รอประมาณ 1 นาที)"
        : "System is currently busy. Please wait a moment and try again (approximately 1 minute)";
    }

    return this.state.language === "th"
      ? "ขออภัย เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง"
      : "Sorry, there was a connection error. Please try again.";
  }
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  new ChatApp();
});
