export function getHighScores() {
  const getParsedItem = (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error parsing ${key}:`, error);
      return null;
    }
  };

  const first = getParsedItem("firstPlace");
  const second = getParsedItem("secondPlace");
  const third = getParsedItem("thirdPlace");

  return {
    first: first,
    second: second,
    third: third,
  };
}

export function checkHighScore(score) {
  const { first, second, third } = getHighScores();
  if (!first || score > first?.score) {
    return "firstPlace";
  }
  if (!second || score > second?.score) {
    return "secondPlace";
  }
  if (!third || score > third?.score) {
    return "thirdPlace";
  }
  return;
}

export function setNewHighScore(key, data) {
  localStorage.setItem(key, data);
}
