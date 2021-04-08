
const hasActiveGame = false;
const hasPreviousGame = false;

const createUi = () => {
  const home = document.getElementById("home");
  const gameContainer = document.getElementById("game");
  const gameTimer = document.getElementById("game-timer");

  const buttonStart = document.getElementById("button-start");

  const buttonPause = document.getElementById("button-pause");
  const gameState = document.getElementById("game-state");

  const winBlock = document.getElementById("win-block");
  const congratulations = document.getElementById("congratulations");

  const scoresBlock = document.getElementById("scores");

  buttonStart.addEventListener("click", () => {
    buttonStart.classList.add("button-start_hidden");
    home.classList.add("home_hidden");

    gameState.classList.remove("game-state_hidden");
    buttonPause.classList.remove("game-state_hidden");

    let rows = parseInt(document.getElementById("rows").value);
    let columns = parseInt(document.getElementById("columns").value);

    const game = createGame(gameContainer, gameTimer, (time, score) => {
      
      winBlock.style.display = "flex";
      
      congratulations.classList.add("_show_win");
      
      setTimeout(() => {
          winBlock.style.display = "none";
          congratulations.classList.remove("_show_win");
      }, 2100);
      
      setTimeout(() => { home.classList.remove("home_hidden") }, 2000);

      const gameTime = new Date();

      scoresBlock.append($("div", {
          className: "score"
      }, $("span", {
          className: "score_text"
      }, "Время игры: " + gameTimer.innerText + ". Счёт: " + score + ". Игра: " + gameTime.getDate() + "." + gameTime.getMonth() + "." + gameTime.getFullYear() + " " + gameTime.getHours() + ":" + gameTime.getMinutes() + ":" + gameTime.getSeconds())));
      
      console.log("Game over", time);

      buttonPause.classList.add("game-state_hidden");
      buttonStart.classList.remove("button-start_hidden");

      buttonPause.removeEventListener("click", togglePause);
    }, rows, columns);

    const togglePause = () => {
      const isRuning = game.pause();

      if (isRuning) {
        home.classList.add("home_hidden");
      } else {
        home.classList.remove("home_hidden");
      }
    }
    buttonPause.addEventListener("click", togglePause);

    game.start();

  });
}

