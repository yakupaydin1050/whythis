// EmojiEngine is responsible for generating emoji sets
// UI should never directly access emoji data

const emojiCategories = {
  animals: ["🐶","🐱","🦁","🐵","🐸","🐼","🐰","🦊"],
  food: ["🍎","🍌","🍇","🍓","🍒","🥝","🍍","🥕"],
  transport: ["🚗","🚕","🚙","✈️","🚀","🚲","🚂","🛴"],
  nature: ["🌲","🌴","🌻","🌈","🌵","🌸","🍄","🌊"],
  sports: ["⚽","🏀","🎾","🏓","🏈","🥊","🏐","🎯"]
};

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

export function generateEmojiSet(count = 8) {
  const allEmojis = Object.values(emojiCategories).flat();
  const shuffled = shuffle([...allEmojis]);
  return shuffled.slice(0, count);
}

export function getRandomCategory() {
  const keys = Object.keys(emojiCategories);
  return keys[Math.floor(Math.random() * keys.length)];
}
