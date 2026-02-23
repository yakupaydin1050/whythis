import { generateEmojiSet } from "./emojiEngine.js";

export function renderUI() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="app-container">
      <h1>whythis</h1>
      <div class="subtitle">Find the hidden connection</div>

      <div class="emoji-grid">
        ${getEmojiGrid()}
      </div>
    </div>
  `;
}

function getEmojiGrid() {
  const emojis = generateEmojiSet(8);

  return emojis
    .map(
      (emoji) => `
        <div class="emoji-item" data-value="${emoji}">
          ${emoji}
        </div>
      `
    )
    .join("");
} 
