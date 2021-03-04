const randomInt = (min,max) =>
    min + Math.floor(Math.random()*(max-min));


const createRandomArray = (min, max, length) => {
    let arr = [];
    for (let i = 0; i < length; i++){
        arr.push(randomInt(min, max));
    }
    return arr;
}

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

const filter = predicate => array => {
    let filtered = [];
    for(let i = 0; i < array.length; i++){
        if(predicate(array[i])){
          filtered.push(array[i]);
        }
    }
    return filtered;
}

const getNegative = filter(n => n < 0);
const getPositive = filter(n => n > 0); 
let getSum = array => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

const getAverage = array => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return Math.trunc(sum / array.length);
}

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
let applesAmounts = createRandomArray(-15, 30, 30)

while(applesCount < goal && applesAmounts.length > 0){
    let apples = applesAmounts.shift();
    applesCount += apples;
    transactions.push(apples);

    logTransaction(apples);
    boxStatement(applesCount);
}
getStatistic(transactions);

getGoal(applesCount, goal);