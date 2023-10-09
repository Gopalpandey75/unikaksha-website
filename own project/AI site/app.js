document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.getElementById("chat-container");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    function appendUserMessage(message) {
        const userMessage = createMessageElement("You", message, "user-message");
        chatContainer.appendChild(userMessage);
        scrollToBottom();
        speakMessage(message);
    }

    function appendBotMessage(message) {
        const botMessage = createMessageElement("AI", message, "bot-message");
        chatContainer.appendChild(botMessage);
        scrollToBottom();
        speakMessage(message);
    }

    function createMessageElement(sender, message, className) {
        const messageElement = document.createElement("div");
        messageElement.textContent = `${sender}: ${message}`;
        messageElement.classList.add("chat-message", className);
        return messageElement;
    }

    function scrollToBottom() {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function speakMessage(message) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(message);
        synth.speak(utterance);
    }

    function handleUserInput() {
        const message = messageInput.value.trim();
        if (message !== "") {
            appendUserMessage(message);
            messageInput.value = "";
            simulateBotResponse(message);
        }
    }

    function simulateBotResponse(userMessage) {
        // Replace this with a call to an actual AI model or chatbot service.
        const botResponse = getBotResponse(userMessage);
        appendBotMessage(botResponse);
    }

    function getBotResponse(userMessage) {
        // Simple logic for a predefined set of responses.
        if (userMessage.toLowerCase().includes("hello")) {
            return "Hello there! How can I help you?";
        } else if (userMessage.toLowerCase().includes("how are you")) {
            return "I'm just a computer program, but thanks for asking!";
        } else if (userMessage.toLowerCase().includes("who is chutiya")) {
            return "harshita is chutiya with extra chutiyapa";
        } else {
            return "I'm sorry, I didn't understand that. Can you please clarify?";
        }
    }

    sendButton.addEventListener("click", handleUserInput);

    messageInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });
});
