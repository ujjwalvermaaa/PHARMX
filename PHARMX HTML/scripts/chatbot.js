// AI Chatbot logic
const chatbotInput = document.getElementById('chatbot-input');
const chatbotMessages = document.getElementById('chatbot-messages');

chatbotInput.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    const userMessage = chatbotInput.value;
    chatbotMessages.innerHTML += `<div class="user-message">${userMessage}</div>`;

    const response = await fetch('/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    chatbotMessages.innerHTML += `<div class="bot-message">${data.reply}</div>`;
    chatbotInput.value = '';
  }
});