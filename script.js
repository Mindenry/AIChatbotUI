// Configuration
const config = {
    typingSpeed: 50, // ms per character
    soundEnabled: true,
    initialMessage: true
};

// Bot responses with categories
// Expanded bot responses with more categories and detailed answers
const botResponses = {
greeting: [
"สวัสดีค่ะ ยินดีต้อนรับสู่ AI Chatbot ฉันพร้อมช่วยเหลือคุณในทุกด้าน ไม่ว่าจะเป็นการให้ข้อมูล คำแนะนำ หรือตอบคำถามต่างๆ",
"สวัสดีค่ะ ฉันเป็น AI ที่พร้อมให้ความช่วยเหลือคุณ สามารถถามได้ทุกเรื่องเลยนะคะ",
"ยินดีที่ได้พบค่ะ ฉันเป็น AI ที่พัฒนามาเพื่อช่วยเหลือคุณโดยเฉพาะ มีอะไรให้ฉันช่วยไหมคะ?"
],
technology: [
"เทคโนโลยีปัจจุบันมีการพัฒนาอย่างรวดเร็ว โดยเฉพาะด้าน AI, IoT, และ Blockchain ที่กำลังเปลี่ยนแปลงโลกของเรา ต้องการทราบเรื่องใดเพิ่มเติมไหมคะ?",
"ในด้านเทคโนโลยี ฉันสามารถให้ข้อมูลเกี่ยวกับ:\n- การพัฒนาซอฟต์แวร์\n- ระบบคลาวด์\n- AI และ Machine Learning\n- การรักษาความปลอดภัยทางไซเบอร์\n- เทคโนโลยีล่าสุดต่างๆ",
"เทคโนโลยีมีบทบาทสำคัญในชีวิตประจำวัน ฉันสามารถแนะนำวิธีใช้เทคโนโลยีให้เกิดประโยชน์สูงสุดได้ค่ะ"
],
business: [
"ธุรกิจในยุคดิจิทัลต้องปรับตัวอย่างรวดเร็ว ฉันสามารถให้คำแนะนำเกี่ยวกับ:\n- กลยุทธ์การตลาดดิจิทัล\n- การวางแผนธุรกิจ\n- การจัดการองค์กร\n- การวิเคราะห์ตลาด\n- การเพิ่มประสิทธิภาพการดำเนินงาน",
"การทำธุรกิจต้องเข้าใจทั้งด้านการเงิน การตลาด และการจัดการ ต้องการคำแนะนำด้านไหนเป็นพิเศษไหมคะ?",
"ฉันสามารถช่วยวิเคราะห์โอกาสทางธุรกิจและให้คำแนะนำในการพัฒนาธุรกิจของคุณค่ะ"
],
education: [
"การศึกษาเป็นรากฐานสำคัญ ฉันสามารถช่วย:\n- แนะนำวิธีการเรียนรู้\n- อธิบายเนื้อหาวิชาการ\n- แนะนำแหล่งความรู้\n- ให้คำปรึกษาด้านการศึกษา",
"ต้องการความช่วยเหลือด้านการเรียนหรือการศึกษาเรื่องใดเป็นพิเศษไหมคะ? ฉันมีความรู้หลากหลายสาขาที่พร้อมแบ่งปัน",
"การเรียนรู้ไม่มีที่สิ้นสุด ฉันพร้อมเป็นผู้ช่วยในการเรียนรู้ของคุณค่ะ"
],
health: [
"สุขภาพเป็นเรื่องสำคัญ ฉันสามารถให้ข้อมูลเกี่ยวกับ:\n- การดูแลสุขภาพเบื้องต้น\n- โภชนาการ\n- การออกกำลังกาย\n- การพักผ่อน\n*หมายเหตุ: ควรปรึกษาแพทย์สำหรับคำแนะนำเฉพาะทาง",
"การมีสุขภาพที่ดีเริ่มต้นจากการใส่ใจดูแลตัวเอง ต้องการคำแนะนำด้านไหนเป็นพิเศษไหมคะ?",
"ฉันมีข้อมูลด้านสุขภาพที่น่าสนใจมากมาย พร้อมแบ่งปันให้คุณค่ะ"
],
finance: [
"การเงินเป็นเรื่องสำคัญ ฉันสามารถให้คำแนะนำเกี่ยวกับ:\n- การวางแผนการเงิน\n- การลงทุน\n- การออม\n- การจัดการหนี้\n- การบริหารความเสี่ยง",
"ต้องการคำแนะนำด้านการเงินเรื่องใดเป็นพิเศษไหมคะ? ฉันพร้อมช่วยวางแผนการเงินให้คุณ",
"การจัดการการเงินที่ดีเป็นรากฐานของความมั่นคง ฉันมีเคล็ดลับดีๆ มาแนะนำค่ะ"
],
lifestyle: [
"ไลฟ์สไตล์ที่ดีช่วยเพิ่มคุณภาพชีวิต ฉันมีคำแนะนำเกี่ยวกับ:\n- การจัดสมดุลชีวิต\n- งานอดิเรก\n- การพัฒนาตนเอง\n- การจัดการเวลา",
"การใช้ชีวิตให้มีความสุขเป็นเรื่องสำคัญ ต้องการคำแนะนำด้านไหนเป็นพิเศษไหมคะ?",
"ฉันพร้อมแบ่งปันเคล็ดลับการใช้ชีวิตที่มีความสุขและมีประสิทธิภาพค่ะ"
],
science: [
"วิทยาศาสตร์ช่วยให้เราเข้าใจโลกรอบตัว ฉันสามารถอธิบายเกี่ยวกับ:\n- ปรากฏการณ์ธรรมชาติ\n- การค้นพบใหม่ๆ\n- นวัตกรรมทางวิทยาศาสตร์\n- ทฤษฎีทางวิทยาศาสตร์",
"วิทยาศาสตร์มีความน่าสนใจมากมาย ต้องการเรียนรู้เรื่องใดเป็นพิเศษไหมคะ?",
"ฉันพร้อมไขข้อข้องใจทางวิทยาศาสตร์ของคุณค่ะ"
],
entertainment: [
"ความบันเทิงช่วยเติมเต็มชีวิต ฉันสามารถแนะนำ:\n- ภาพยนตร์และซีรีส์\n- เพลงและดนตรี\n- หนังสือ\n- เกมส์\n- กิจกรรมสันทนาการ",
"ต้องการคำแนะนำด้านความบันเทิงแนวไหนเป็นพิเศษไหมคะ?",
"ฉันมีข้อมูลด้านความบันเทิงที่น่าสนใจมากมาย พร้อมแนะนำให้คุณค่ะ"
],
error: [
"ขออภัยค่ะ ฉันไม่เข้าใจคำถามนี้ กรุณาถามใหม่หรือถามในรูปแบบอื่นนะคะ",
"ขออภัยค่ะ ฉันไม่แน่ใจว่าเข้าใจคำถามถูกต้อง กรุณาอธิบายเพิ่มเติมหรือถามใหม่อีกครั้งนะคะ",
"ดูเหมือนจะมีความไม่ชัดเจนในคำถาม กรุณาถามใหม่อีกครั้งโดยให้รายละเอียดเพิ่มเติมนะคะ"
],
general: [
"เข้าใจแล้วค่ะ หากมีคำถามเพิ่มเติม สามารถถามได้เลยนะคะ",
"ขอบคุณที่แชร์ข้อมูลค่ะ ต้องการให้ฉันอธิบายเพิ่มเติมในส่วนไหนไหมคะ?",
"ฉันพร้อมช่วยเหลือคุณต่อค่ะ มีคำถามอื่นๆ อีกไหมคะ?"
]
};

// Enhanced keywords for better response matching
const keywords = {
greeting: ['สวัสดี', 'หวัดดี', 'ดี', 'hi', 'hello', 'hey'],
technology: ['เทคโนโลยี', 'ai', 'คอมพิวเตอร์', 'โปรแกรม', 'แอพ', 'software', 'hardware', 'coding', 'programming'],
business: ['ธุรกิจ', 'การตลาด', 'startup', 'sme', 'ขาย', 'ลงทุน', 'business', 'marketing'],
education: ['เรียน', 'การศึกษา', 'โรงเรียน', 'มหาวิทยาลัย', 'วิชา', 'study', 'learn', 'school'],
health: ['สุขภาพ', 'โรค', 'หมอ', 'ออกกำลังกาย', 'อาหาร', 'health', 'exercise', 'diet'],
finance: ['การเงิน', 'เงิน', 'ธนาคาร', 'หุ้น', 'คริปโต', 'investment', 'stock', 'crypto'],
lifestyle: ['ไลฟ์สไตล์', 'ชีวิต', 'ความสุข', 'งานอดิเรก', 'lifestyle', 'life', 'hobby'],
science: ['วิทยาศาสตร์', 'ฟิสิกส์', 'เคมี', 'ชีววิทยา', 'science', 'physics', 'chemistry'],
entertainment: ['หนัง', 'เพลง', 'เกม', 'บันเทิง', 'movie', 'music', 'game', 'entertainment']
};

// Enhanced response determination
function determineResponseCategory(message) {
message = message.toLowerCase();

// Check for multiple keywords and assign weights
let categoryScores = {};

for (const [category, words] of Object.entries(keywords)) {
categoryScores[category] = 0;
words.forEach(word => {
    if (message.includes(word)) {
        categoryScores[category]++;
        
        // Add extra weight for exact matches
        if (message === word) {
            categoryScores[category] += 2;
        }
    }
});
}

// Find category with highest score
let maxScore = 0;
let bestCategory = 'general';

for (const [category, score] of Object.entries(categoryScores)) {
if (score > maxScore) {
    maxScore = score;
    bestCategory = category;
}
}

return bestCategory;
}

// Function to get context-aware response
function getContextAwareResponse(message, category) {
const responses = botResponses[category];

// Check for specific contexts within the category
if (category === 'technology' && message.toLowerCase().includes('ai')) {
return "AI หรือปัญญาประดิษฐ์เป็นเทคโนโลยีที่กำลังเปลี่ยนแปลงโลก ฉันสามารถอธิบายเกี่ยวกับ:\n- Machine Learning\n- Deep Learning\n- Natural Language Processing\n- Computer Vision\nต้องการทราบเรื่องใดเพิ่มเติมไหมคะ?";
}

// Add more specific context checks as needed

// Function to get context-aware response (continued)
return responses[Math.floor(Math.random() * responses.length)];
}

// Enhanced message processing
async function processUserMessage(message) {
// ตรวจสอบคำถามเฉพาะก่อน
const specificResponse = getSpecificResponse(message);
if (specificResponse) {
return specificResponse;
}

// ถ้าไม่ใช่คำถามเฉพาะ ใช้ระบบการตอบปกติ
const category = determineResponseCategory(message);
let response = getContextAwareResponse(message, category);

// เพิ่มคำแนะนำที่เกี่ยวข้อง
const suggestions = getSuggestions(category);
if (suggestions) {
response += "\n\nคำถามที่เกี่ยวข้อง:\n" + suggestions;
}

return response;
}

let conversationContext = {
lastCategory: null,
lastQuestion: null,
topics: []
};

function updateContext(message, category) {
conversationContext.lastQuestion = message;
conversationContext.lastCategory = category;
conversationContext.topics.push(category);

// เก็บเฉพาะ 5 topics ล่าสุด
if (conversationContext.topics.length > 5) {
conversationContext.topics.shift();
}
}

// Function to get relevant suggestions based on category
function getSuggestions(category) {
const suggestionMap = {
technology: [
    "อยากทราบเกี่ยวกับเทคโนโลยีล่าสุดไหมคะ?",
    "สนใจเรื่อง AI และ Machine Learning ไหมคะ?",
    "ต้องการคำแนะนำเรื่องการเลือกซื้ออุปกรณ์ไหมคะ?"
],
business: [
    "สนใจเรื่องการเริ่มต้นธุรกิจไหมคะ?",
    "ต้องการคำแนะนำด้านการตลาดออนไลน์ไหมคะ?",
    "อยากทราบเทรนด์ธุรกิจล่าสุดไหมคะ?"
],
education: [
    "สนใจวิธีการเรียนรู้แบบใหม่ไหมคะ?",
    "ต้องการคำแนะนำเรื่องการเรียนต่อไหมคะ?",
    "อยากทราบเทคนิคการเรียนที่มีประสิทธิภาพไหมคะ?"
],
health: [
    "สนใจเคล็ดลับการดูแลสุขภาพไหมคะ?",
    "ต้องการคำแนะนำเรื่องการออกกำลังกายไหมคะ?",
    "อยากทราบเรื่องโภชนาการเพิ่มเติมไหมคะ?"
],
finance: [
    "สนใจวิธีการออมเงินไหมคะ?",
    "ต้องการคำแนะนำเรื่องการลงทุนไหมคะ?",
    "อยากทราบเรื่องการวางแผนการเงินไหมคะ?"
]
};

return suggestionMap[category]?.join("\n") || null;
}

const specificResponses = {
name: [
"สวัสดีค่ะ ฉันชื่อ AI Assistant ยินดีที่ได้รู้จักค่ะ",
"ฉันเป็น AI Assistant ค่ะ คุณสามารถเรียกฉันว่า Assistant ก็ได้นะคะ",
"ฉันคือ AI Assistant ที่พร้อมช่วยเหลือคุณทุกด้านเลยค่ะ"
],
capabilities: [
"ฉันมีความสามารถหลากหลายด้านค่ะ เช่น:\n1. ให้ข้อมูลและคำแนะนำด้านต่างๆ\n2. ช่วยตอบคำถามเชิงวิชาการ\n3. วิเคราะห์และแก้ปัญหา\n4. ให้คำปรึกษาด้านธุรกิจและการเงิน\n5. แนะนำด้านเทคโนโลยีและไอที\n6. ช่วยด้านการศึกษาและการเรียนรู้\n\nคุณสนใจเรื่องไหนเป็นพิเศษไหมคะ?",
"ฉันสามารถช่วยคุณได้หลายด้านค่ะ เช่น:\n- ตอบคำถามทั่วไป\n- ให้ความรู้ด้านต่างๆ\n- แนะนำและให้คำปรึกษา\n- ช่วยวิเคราะห์และแก้ปัญหา\n- ให้ข้อมูลที่เป็นประโยชน์\n\nอยากทราบรายละเอียดด้านไหนเพิ่มเติมไหมคะ?"
]
};

function getSpecificResponse(message) {
message = message.toLowerCase();

// คำถามเกี่ยวกับชื่อ
if (message.includes('ชื่อ') || message.includes('name')) {
return getRandomResponse(specificResponses.name);
}

// คำถามเกี่ยวกับความสามารถ
if (message.includes('ทำอะไร') || message.includes('ความสามารถ') || 
message.includes('ทำไร') || message.includes('ช่วยอะไร') ||
message.includes('what can you do')) {
return getRandomResponse(specificResponses.capabilities);
}

return null;
}


// Enhanced user interaction handling
async function handleUserMessage() {
const message = messageInput.value.trim();
if (!message || isTyping) return;

// บันทึกข้อความผู้ใช้
const timestamp = new Date().toLocaleTimeString();
addMessage(message, true, timestamp);
saveMessage(message, true, timestamp);

// ล้างข้อความและรีเซ็ตความสูง
messageInput.value = '';
messageInput.style.height = 'auto';

// ประมวลผลข้อความและสร้างการตอบกลับ
const response = await processUserMessage(message);

// อัพเดทบริบทการสนทนา
const category = determineResponseCategory(message);
updateContext(message, category);

// แสดงการตอบกลับ
await addBotMessage(response);

// บันทึกการโต้ตอบ
logInteraction(message, response);
}

// Function to log interactions
function logInteraction(userMessage, botResponse) {
const interaction = {
timestamp: new Date().toISOString(),
userMessage,
botResponse,
category: determineResponseCategory(userMessage)
};

// Store in local storage
const interactions = JSON.parse(localStorage.getItem('interactions') || '[]');
interactions.push(interaction);
localStorage.setItem('interactions', JSON.stringify(interactions));
}

// Enhanced notification system
function showNotification(message, type = 'success') {
const notification = document.createElement('div');
notification.className = `notification ${type}`;
notification.textContent = message;

// Add icon based on type
const icon = document.createElement('span');
icon.textContent = type === 'success' ? '✓' : type === 'error' ? '⚠' : 'ℹ';
notification.prepend(icon);

document.body.appendChild(notification);

// Animate
notification.style.animation = 'slideIn 0.3s ease, fadeOut 0.3s ease 2.7s';

// Remove after animation
setTimeout(() => notification.remove(), 3000);
}

// Enhanced message formatting
function formatMessage(text) {
return text
// Code blocks
.replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>')
// Inline code
.replace(/`([^`]+)`/g, '<code>$1</code>')
// URLs
.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>')
// Emojis
.replace(/:[a-zA-Z_]+:/g, emoji => getEmoji(emoji))
// Bold
.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
// Italic
.replace(/\*(.*?)\*/g, '<em>$1</em>')
// Lists
.replace(/^- (.*)/gm, '<li>$1</li>')
.replace(/<li>.*<\/li>/s, '<ul>$&</ul>');
}

// Function to handle voice input
function initializeVoiceInput() {
if ('webkitSpeechRecognition' in window) {
const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = 'th-TH';

const voiceButton = document.createElement('button');
voiceButton.className = 'voice-button';
voiceButton.innerHTML = '🎤';
voiceButton.title = 'พูดเพื่อส่งข้อความ';

document.querySelector('.input-box').appendChild(voiceButton);

voiceButton.addEventListener('click', () => {
    recognition.start();
    voiceButton.classList.add('listening');
});

recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    messageInput.value = text;
    voiceButton.classList.remove('listening');
    handleUserMessage();
};

recognition.onerror = () => {
    voiceButton.classList.remove('listening');
    showNotification('ไม่สามารถรับเสียงได้ กรุณาลองใหม่อีกครั้ง', 'error');
};
}
}

// Initialize voice input
initializeVoiceInput();

// Add this CSS for voice input button
const style = document.createElement('style');
style.textContent = `
.voice-button {
background: none;
border: none;
font-size: 1.5rem;
cursor: pointer;
padding: 0.5rem;
transition: all 0.3s ease;
}

.voice-button.listening {
animation: pulse 1.5s infinite;
color: #ff4444;
}

@keyframes pulse {
0% { transform: scale(1); }
50% { transform: scale(1.2); }
100% { transform: scale(1); }
}
`;
document.head.appendChild(style);

// DOM Elements
const chatContainer = document.getElementById('chatContainer');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const typingIndicator = document.getElementById('typingIndicator');
const themeToggle = document.getElementById('themeToggle');
const clearChat = document.getElementById('clearChat');
const toggleSound = document.getElementById('toggleSound');
const suggestedQuestion1 = document.getElementById('suggestedQuestion1');
const suggestedQuestion2 = document.getElementById('suggestedQuestion2');
const suggestedQuestion3 = document.getElementById('suggestedQuestion3');

// State
let isDarkMode = localStorage.getItem('darkMode') === 'true';
let isSoundEnabled = localStorage.getItem('soundEnabled') !== 'false';
let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
let isTyping = false;

// Initialize
function initialize() {
    updateTheme();
    updateSoundIcon();
    loadChatHistory();
    if (config.initialMessage && chatHistory.length === 0) {
        setTimeout(() => {
            const greeting = getRandomResponse('greeting');
            addBotMessage(greeting);
        }, 1000);
    }
}

// Theme handling
function updateTheme() {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', isDarkMode);
}

// Sound handling
function updateSoundIcon() {
    toggleSound.textContent = isSoundEnabled ? '🔊' : '🔇';
    localStorage.setItem('soundEnabled', isSoundEnabled);
}

function playNotificationSound() {
    if (isSoundEnabled) {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiTSwYkdL/y552mNwcYZ7Xx76qyQwgUXrX0/95QFQYMWz/v/u9mIAoHEVw48///cysNCAoaXjn0//9/Mw8JBh5fOvX//4k8EAoD');
        audio.play().catch(e => console.log('Audio play failed:', e));
    }
}

// Message handling
function getRandomResponse(category) {
    const responses = botResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
}

function determineResponseCategory(message) {
    message = message.toLowerCase();
    for (const [category, words] of Object.entries(keywords)) {
        if (words.some(word => message.includes(word))) {
            return category;
        }
    }
    return 'general';
}

async function addBotMessage(text) {
    isTyping = true;
    typingIndicator.style.display = 'block';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Simulate typing delay
    const delay = text.length * config.typingSpeed;
    await new Promise(resolve => setTimeout(resolve, delay));

    isTyping = false;
    typingIndicator.style.display = 'none';
    
    const timestamp = new Date().toLocaleTimeString();
    addMessage(text, false, timestamp);
    saveMessage(text, false, timestamp);
    playNotificationSound();
}

function addMessage(text, isUser, timestamp) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.style.backgroundImage = isUser ? 
        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23888\'%3E%3Cpath d=\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\'/%3E%3C/svg%3E")' :
        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23888\'%3E%3Cpath d=\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\'/%3E%3C/svg%3E")';

    const content = document.createElement('div');
    content.className = 'message-content';
    
    // Convert URLs to links and handle code blocks
    const formattedText = text
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>')
        .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
    
    content.innerHTML = formattedText;

    const time = document.createElement('div');
    time.className = 'timestamp';
    time.textContent = timestamp;

    const actions = document.createElement('div');
    actions.className = 'message-actions';
    
    const copyButton = document.createElement('button');
    copyButton.className = 'action-button';
    copyButton.textContent = '📋';
    copyButton.title = 'คัดลอก';
    copyButton.onclick = () => {
        navigator.clipboard.writeText(text);
        showNotification('คัดลอกข้อความแล้ว');
    };
    
    actions.appendChild(copyButton);
    content.appendChild(time);
    content.appendChild(actions);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    chatContainer.appendChild(messageDiv);

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function saveMessage(text, isUser, timestamp) {
    chatHistory.push({ text, isUser, timestamp });
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

function loadChatHistory() {
    chatContainer.innerHTML = '';
    chatHistory.forEach(message => addMessage(message.text, message.isUser, message.timestamp));
}

async function handleUserMessage() {
    const message = messageInput.value.trim();
    if (!message || isTyping) return;

    // Add user message
    const timestamp = new Date().toLocaleTimeString();
    addMessage(message, true, timestamp);
    saveMessage(message, true, timestamp);

    // Clear input
    messageInput.value = '';
    messageInput.style.height = 'auto';

    // Generate bot response
    const category = determineResponseCategory(message);
    const response = getRandomResponse(category);
    await addBotMessage(response);
}

// Event Listeners
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserMessage();
    }
});

messageInput.addEventListener('input', () => {
    messageInput.style.height = 'auto';
    messageInput.style.height = messageInput.scrollHeight + 'px';
});

sendButton.addEventListener('click', handleUserMessage);

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    updateTheme();
});

toggleSound.addEventListener('click', () => {
    isSoundEnabled = !isSoundEnabled;
    updateSoundIcon();
});

clearChat.addEventListener('click', () => {
    if (confirm('ต้องการล้างประวัติการสนทนาทั้งหมดหรือไม่?')) {
        chatHistory = [];
        localStorage.removeItem('chatHistory');
        chatContainer.innerHTML = '';
        showNotification('ล้างประวัติการสนทนาแล้ว');
        setTimeout(() => {
            const greeting = getRandomResponse('greeting');
            addBotMessage(greeting);
        }, 500);
    }
});

suggestedQuestion1.addEventListener('click', () => {
    messageInput.value = "วิธีการใช้งานเป็นอย่างไร?";
    handleUserMessage();
});

suggestedQuestion2.addEventListener('click', () => {
    messageInput.value = "บอทมีความสามารถอะไรบ้าง?";
    handleUserMessage();
});

suggestedQuestion3.addEventListener('click', () => {
    messageInput.value = "ต้องการความช่วยเหลือ";
    handleUserMessage();
});

// Initialize the app
initialize();