// Генерируем массив Длиной N * N, в котором по две копии всех чисел от 0 до N * N / 2
// 0, 1, 2, 3, 4, 5, 6, 7
// 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5 
// 0, 0, 1, 1, 2, 2, 3, 3 ..

// Отсортировать его случайно.

const generateValues = (n, m) =>
  createArray(index => [Math.floor(index / 2), Math.random()]) (n * m)
  .sort((a, b) => a[1] - b[1])
  .map(a => a[0]);

const generateState = (n, m) => createArray(() => false) (n * m);

const generateTimersList = (n, m) => createArray(() => null) (n * m);



let N = 2;
let M = 2;

const width = 150;
const height = 200;


let values = [];
let state = [];
let timers = [];
let opens = 0;

let gameTimer = null;
let startTime = 0;
let endTime = 0;

let gridDiv = null;
let notifyGameOver = null;

const createGame = (gameDiv, timerDiv, gameOverCallback, rows, columns) => {
  notifyGameOver = gameOverCallback;

  N = rows;
  M = columns;

  values = generateValues(N, M);
  state = generateState(N, M);
  timers = generateTimersList(N, M);

  console.log(values);

  gridDiv = $("div", { 
      className: "grid",
      style: {
        gridTemplateRows: "repeat(" + M + ", " + height + "px)", // repeat(4, 200px)
        gridTemplateColumns: "repeat(" + N + ", " + width + "px)",
      } 
    }, 
    ...createArray(createCard)(N * M)
  );

  timerDiv.innerText = "00:00";
  gameDiv.append(gridDiv);

  startTime = Date.now(); // количество миллисекунд прошедших с 1 января 1970  Эпоха Unix
  gameTimer = setInterval(updateGameTimer(timerDiv), 1000);

};

const togglePause = () => null;


const updateGameTimer = (timerDiv) => () => {
  const time = Date.now() - startTime;

  const s = Math.round(time / 1000) % 60;
  const m = Math.floor(time / (60 * 1000));

  timerDiv.innerText = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

const createCard = (index) => {
  const div = $("div", { 
    className: "card card_closed",
    dataset: {
      index: index,
    },
    onclick:  handleClick, // addEventListener("click", () => ...)
  }, 
    $("div", { className: "card__face card__front"}, $("img", {
      src: "images/" + values[index] + ".png"
    })),
    $("div", { className: "card__face card__back"}),
  );

  return div;
}




let pair = []; // 0-2 элементов

const openCard = (cardDiv) => {
  ++opens;
  cardDiv.classList.add("card_open");
  cardDiv.classList.remove("card_closed");
  pair.push(cardDiv);
}

const closeCard = (cardDiv) => {
  cardDiv.classList.add("card_closed");
  cardDiv.classList.remove("card_open");
  // pair.splice(pair.indexOf(cardDiv), 1);
}

const extractCardIndex = (cardDiv) => parseInt(cardDiv.dataset.index);

const handleClick = (event) => {

  console.log("before", pair);

  const cardDiv = event.currentTarget;
  const cardIndex = extractCardIndex(cardDiv);

  if (timers[cardIndex] !== null) {
    clearTimeout(timers[cardIndex]);
    timers[cardIndex] = null;
  }

  if (state[cardIndex]) {
    return;
  }

  const isOpen = pair.includes(cardDiv); // cardDiv.classList.contains("card_open"); 

  if (!isOpen) {
    openCard(cardDiv)
  }

  if (pair.length === 2) {
    const indexes = pair.map(extractCardIndex);
    const [value1, value2] = indexes.map(index => values[index]);

    console.log(value1, value2, value1 === value2);

    if (value1 === value2) {
      indexes.forEach(index => state[index] = true);
      if (state.every(flag => flag)) {
        endTime = Date.now();
        console.log("YOU WIN", endTime);
      
        clearInterval(gameTimer);
        gameTimer = null;

        
        setTimeout(() => { gridDiv.remove() }, 1000); // Удаляем элемент со страницы
        // gridDiv.parentElement.removeChild(gridDiv); // removeChild - удалем у родителя переданный элемент
        
        notifyGameOver(endTime - startTime, opens);
        opens = 0;
      }
    
      pair = [];
    } else {

      pair.forEach(cardDiv => {
        const index =  extractCardIndex(cardDiv);
        
        timers[index] = setTimeout(() => {
          closeCard(cardDiv);
          timers[index] = null;
        }, 700);
      });

      pair = [];
    }

  }

  console.log("after", pair, timers);
}
