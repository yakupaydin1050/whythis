// EmojiEngine generates emoji sets based on a rule

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

export function getRandomCategory() {
  const keys = Object.keys(emojiCategories);
  return keys[Math.floor(Math.random() * keys.length)];
}

export function generateEmojiSetForRule(ruleCategory, count = 8) {
  const correctEmojis = shuffle([...emojiCategories[ruleCategory]]).slice(0, 4);

  const otherCategories = Object.keys(emojiCategories).filter(
    (cat) => cat !== ruleCategory
  );

  const incorrectPool = otherCategories.flatMap(
    (cat) => emojiCategories[cat]
  );

  const incorrectEmojis = shuffle([...incorrectPool]).slice(0, 4);

  return shuffle([...correctEmojis, ...incorrectEmojis]);
}
