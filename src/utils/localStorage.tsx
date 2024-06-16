import {
  FIRST_PLACE,
  SECOND_PLACE,
  THIRD_PLACE,
} from "../constants/PlacesConstans.tsx";

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

  const first = getParsedItem(FIRST_PLACE);
  const second = getParsedItem(SECOND_PLACE);
  const third = getParsedItem(THIRD_PLACE);

  return {
    first: first ?? "",
    second: second ?? "",
    third: third ?? "",
  };
}

export function checkHighScore(score) {
  const { first, second, third } = getHighScores();
  if (!first || score > first?.score) {
    return FIRST_PLACE;
  }
  if (!second || score > second?.score) {
    return SECOND_PLACE;
  }
  if (!third || score > third?.score) {
    return THIRD_PLACE;
  }
  return;
}

export function setNewHighScore(key, data) {
  if (key === FIRST_PLACE) {
    const { first, second } = getHighScores();
    localStorage.setItem(SECOND_PLACE, JSON.stringify(first));
    localStorage.setItem(THIRD_PLACE, JSON.stringify(second));
    localStorage.setItem(FIRST_PLACE, data);
  }
  if (key === SECOND_PLACE) {
    const { second } = getHighScores();
    localStorage.setItem(THIRD_PLACE, JSON.stringify(second));
    localStorage.setItem(SECOND_PLACE, data);
  }
  if (key === THIRD_PLACE) {
    localStorage.setItem(THIRD_PLACE, data);
  }
}
