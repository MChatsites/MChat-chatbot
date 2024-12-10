document.addEventListener("DOMContentLoaded", () => {

  const knowledgeBase = {

    "hello": "Hi there! How can I help you?",

    "how are you": "I'm just a bot, but I'm doing great! How about you?",

    "what is javascript": "JavaScript is a programming language used to make web pages interactive.",

    "what is ai": "AI stands for Artificial Intelligence, the simulation of human intelligence by machines.",

    "tell me a joke": "Why do programmers prefer dark mode? It has fewer bugs!",

    "bye": "Goodbye! Have a great day!",

    "what is the largest planet": "The largest planet in our solar system is Jupiter.",

    "who is elon musk": "Elon Musk is the CEO of SpaceX and Tesla, known for his contributions to technology and space exploration.",

    "what is python": "Python is a programming language known for its simplicity and versatility.",

    "what is the speed of light": "The speed of light is approximately 299,792 kilometers per second.",

    "what is the capital of france": "The capital of France is Paris.",

    "who invented the light bulb": "Thomas Edison is credited with inventing the light bulb.",

    "what is 2+2": "2+2 equals 4.",

    "what is the smallest country": "The smallest country in the world is Vatican City.",

    "what is the longest river": "The longest river in the world is the Nile River.",

    "what is the fastest animal": "The fastest land animal is the cheetah.",

    "who wrote harry potter": "The Harry Potter series was written by J.K. Rowling.",

    "what is the tallest mountain": "The tallest mountain in the world is Mount Everest.",

    "who is the president of the usa": "The current president of the USA is Joe Biden (as of 2024).",

    "what is blockchain": "Blockchain is a decentralized ledger technology used for secure and transparent transactions.",

    "who painted the mona lisa": "The Mona Lisa was painted by Leonardo da Vinci.",

    "what is the meaning of life": "The meaning of life is subjective and can vary from person to person.",

    "what is gravity": "Gravity is the force that attracts objects with mass toward each other.",

    "who discovered penicillin": "Penicillin was discovered by Alexander Fleming.",

    "what is quantum computing": "Quantum computing uses quantum mechanics to perform computations faster than classical computers.",

    "what is cryptocurrency": "Cryptocurrency is a digital or virtual currency secured by cryptography.",

    "what is the internet": "The internet is a global network that connects millions of private, public, academic, and business networks."

    // Expand this list with more questions up to 200.

  };

  const chatBox = document.getElementById("chatBox");

  const userInput = document.getElementById("userInput");

  const sendButton = document.getElementById("sendButton");

  const newChatButton = document.getElementById("newChatButton");

  sendButton.addEventListener("click", () => {

    const userMessage = userInput.value.trim();

    if (userMessage) {

      addMessage("userMessage", userMessage);

      const botResponse = knowledgeBase[userMessage.toLowerCase()] || "I'm sorry, I don't know the answer to that.";

      addMessage("botMessage", botResponse);

      userInput.value = "";

    }

  });

  newChatButton.addEventListener("click", () => {

    chatBox.innerHTML = "";

  });

  function addMessage(type, text) {

    const message = document.createElement("div");

    message.classList.add(type);

    message.textContent = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;

  }

});