export function getHighScores() {
  const first = localStorage.getItem("firstPlace");
  const second = localStorage.getItem("secondPlace");
  const third = localStorage.getItem("thirdPlace");

  return {
    first: first ? JSON.parse(first) : null,
    second: second ? JSON.parse(second) : null,
    third: third ? JSON.parse(third) : null,
  };
}
// aqui solo hacer el check para ver si preguntar nombre en end screen
export function checkHighScore(score) {
  const records = getHighScores();
  if (score > records.first.score) {
    localStorage.setItem("firtsPlace", score);
    console.log("entra a 1");
  }
  if (score > records.second?.score) {
    localStorage.setItem("thirdPlace", score);

    console.log("entra a 2");
  }
  if (score > records.third?.score) {
    console.log("entra a 3");
  }
  console.log(records);
}

// aqui setear nuevo local storage uan vez ya chequeada la posicion en podium
export function setNewHighScore(score, name, position) {}
