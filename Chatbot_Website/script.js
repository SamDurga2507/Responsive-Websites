function createMessageBubble(message) {
  const messageBubble = document.createElement("div");
  const Message_div = document.createElement("div");
  Message_div.classList.add("message", "user-message");
  messageBubble.classList.add("user-bubble", "message-bubble");
  messageBubble.textContent = message;
  // append the bubble in message div
  Message_div.appendChild(messageBubble);
  // append the child in the container
  const messageContainer = document.querySelector(".message-container");
  messageContainer.appendChild(Message_div);

  // scrollup
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

const inputField = document.querySelector(".input-text");
const sendButton = document.querySelector(".send-button");

sendButton.addEventListener("click", () => {
  console.log("button clicked");
  const message = inputField.value.trim();
  if (message) {
    createMessageBubble(message);
    inputField.value = "";
  }
});

const chatbotContainer = document.querySelector(".chatbot-container");

const triggerIcon = document.querySelector(".trigger-button");

triggerIcon.addEventListener("click", () => {
  console.log("trigger button clicked");
  chatbotContainer.classList.toggle("active");
});

const link = document.querySelector(".link");
const inputFile = document.querySelector(".upload-file");

link.addEventListener("click", () => {
  inputFile.click();
});

inputFile.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Create a new message div for the image
      const imageMessageDiv = document.createElement("div");
      imageMessageDiv.classList.add("message", "user-message");

      // Create an image element
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = "uploaded image";
      img.classList.add("user-bubble", "message-bubble");
      img.style.background = "#fff";

      // Append the image to the message div
      imageMessageDiv.appendChild(img);

      // Append the message div to the message container
      const messageContainer = document.querySelector(".message-container");
      messageContainer.appendChild(imageMessageDiv);

      // Scroll to the bottom
      messageContainer.scrollTop = messageContainer.scrollHeight;
    };
    reader.readAsDataURL(file);
  }
});
