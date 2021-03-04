const randomInt = (min,max) =>
    min + Math.floor(Math.random()*(max-min));

const createArray = (mapFunction = index => index) => length => 
  Array.from({ length }, (_, index) => mapFunction(index));

const createRandomArray = (min, max) => 
    createArray(() => randomInt(min, max));

const boxStatement = applesCount => {
    if(applesCount === 0){
        console.log("Ящик пуст" + " | " + "В коробке " + applesCasing(applesCount));
    } else if(applesCount > 0){
        console.log("Ящик полон" + " | " + "В коробке " + applesCasing(applesCount));
    } else if(applesCount < 0){
        console.log("Кредитная коробка" + " | " + "В коробке " + applesCasing(applesCount));
    }
}

const trueCasing = (form1, form2, form3) => {
    // n + " " + (n === 1 ? singular : plural);
    return (n) => {
      let absN = Math.abs(n);
      // 123456
      let lastDigt = absN % 10;  // 6
      let secondToLastDigits = Math.trunc(absN / 10) % 10; // 12345 % 10 = 5 
      let word;
      if (secondToLastDigits === 1) {
        word = form3;
      } else {
        if (lastDigt === 1) {
          word = form1;
        } else if (2 <= lastDigt && lastDigt <= 4) {
          word = form2;
        } else {
          word = form3;
        }
      }
      return n + " " + word;
    }
  }

const getGoal = (applesCount, goal) => {
    if(applesCount >= goal){
        console.log("Вау! Мы собрали " + applesCasing(applesCount));
    } else{
        console.log("Ты не смог собрать все, что нам нужно Джон, теперь ты знаешь что будет");
    }
}

const logTransaction = applesCount => {
    if(applesCount < 0){
        console.log("Ты потерял " + applesCasing(applesCount));
    } else if(applesCount > 0){
        console.log("Ты получил " + applesCasing(applesCount));
    } else{
        console.log("Ты ничего не потерял");
    }
}

const getNegative = array => array.filter(n => n < 0);
const getPositive = array => array.filter(n => n > 0); 

const getSum = array => array.reduce((sum, number) => sum + number, 0);

const getAverage = array => Math.trunc(getSum(array) / array.length);

const getStatistic = transactions => {
    let pluses = getPositive(transactions);
    let minuses = getNegative(transactions);

    console.log("Доход: " + getSum(pluses));
    console.log("Расход: " + getSum(minuses));

    console.log("Средний доход: " + getAverage(pluses));
    console.log("Средний расход: " + getAverage(minuses));
}

const applesCasing = trueCasing("яблоко", "яблока", "яблок");
const goal = 100;
const days = 10;
let applesCount = 0;

let transactions = [];
let applesAmounts = createRandomArray(-15, 30) (30)

while(applesCount < goal && applesAmounts.length > 0){
    let apples = applesAmounts.shift();
    applesCount += apples;
    transactions.push(apples);

    logTransaction(apples);
    boxStatement(applesCount);
}

let allProcess = transactions.map(transaction => transaction > 0 ? "Доход" : "Расход");

getStatistic(transactions);

if(transactions.every(trans => trans > 0)){
    console.log("Черт побери Джон, ни одной потери! Да ты везунчик");
} else{
    console.log("Двум потерям не бывать а одной не миновать, да Джон?");
}
console.log("Все доходы или расходы: " + allProcess);

getGoal(applesCount, goal);