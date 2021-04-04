  
const createUi = () => {
    const home = document.getElementById("home");
    const game = document.getElementById("game");
    const gameTimer = document.getElementById("game-timer");

    const buttonStart = document.getElementById("button-start");
    const buttonPause = document.getElementById("button-pause");
  
    const submitSettingsButton = document.getElementById("submit-settings");

    const winBlock = document.getElementById("win-block");
    const congratulations = document.getElementById("congratulations");

    const scoresBlock = document.getElementById("scores");

    buttonStart.addEventListener("click", () => {
      home.classList.add("home_hidden");
  
      let rows = parseInt(document.getElementById("rows").value);
      let columns = parseInt(document.getElementById("columns").value);

      createGame(game, gameTimer, (time, score) => {
        
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
      }, rows, columns);
  
    });
  }