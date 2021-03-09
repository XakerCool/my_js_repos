const analitics = {
    randomInt: (min,max) => min + Math.floor(Math.random()*(max-min)),
    createArray: (mapFunction = index => index) => length => Array.from({ length }, (_, index) => mapFunction(index)),
    createRandomArray: (min, max) => analitics.createArray(() => analitics.randomInt(min, max)),
    getNegative: array => array.filter(n => n < 0),
    getPositive: array => array.filter(n => n > 0),
    getSum: array => array.reduce((sum, number) => sum + number, 0),
    getAverage: array => Math.trunc(analitics.getSum(array) / array.length),
};
const log = {
    trueCasing: (form1, form2, form3) => {
        return (n) => {
            let absN = Math.abs(n);
            // 123456
            let lastDigt = absN % 10;
            let secondToLastDigits = Math.trunc(absN / 10) % 10; 
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
    },
    applesCasing: applesCount => log.trueCasing("яблоко", "яблока", "яблок"),
    boxStatement: (applesCount) => {
        if(applesCount === 0){
            console.log("Ящик пуст" + " | " + "В коробке " + applesCasing(applesCount));
        } else if(applesCount > 0){
            console.log("Ящик полон" + " | " + "В коробке " + applesCasing(applesCount));
        } else if(applesCount < 0){
            console.log("Кредитная коробка" + " | " + "В коробке " + applesCasing(applesCount));
        }
    },
    getGoal: (applesCount, goal) => {
        if(applesCount >= goal){
            console.log("Вау! Мы собрали " + applesCasing(applesCount));
        } else{
            console.log("Ты не смог собрать все, что нам нужно Джон, теперь ты знаешь что будет");
        }
    },
    logTransaction: (applesCount) => {
        if(applesCount < 0){
            console.log("Ты потерял " + applesCasing(applesCount));
        } else if(applesCount > 0){
            console.log("Ты получил " + applesCasing(applesCount));
        } else{
            console.log("Ты ничего не потерял");
        }
    },
    getStatistic: transactions => {
        let pluses = analitics.getPositive(transactions);
        let minuses = analitics.getNegative(transactions);
    
        console.log("Доход: " + analitics.getSum(pluses));
        console.log("Расход: " + analitics.getSum(minuses));

        console.log("Средний доход: " + analitics.getAverage(pluses));
        console.log("Средний расход: " + analitics.getAverage(minuses));
    },
    getLuckyState: transactions => {
        if(transactions.every(trans => trans > 0)){
            console.log("Черт побери Джон, ни одной потери! Да ты везунчик");
        } else{
            console.log("Двум потерям не бывать а одной не миновать, да Джон?");
        }
    },
    getAllPlusesAndMinuses: allProcess => {
        console.log("Все доходы или расходы: " + allProcess);
    }
};
const applesCasing = log.trueCasing("яблоко", "яблока", "яблок");



const goal = 100;
const days = 10;
let applesCount = 0;

let transactions = [];
let applesAmounts = analitics.createRandomArray(-15, 30) (30)

while(applesCount < goal && applesAmounts.length > 0){
    let apples = applesAmounts.shift();
    applesCount += apples;
    transactions.push(apples);

    log.logTransaction(apples);
    log.boxStatement(applesCount);
}

let allProcess = transactions.map(transaction => transaction > 0 ? "Доход" : "Расход");

log.getStatistic(transactions);

log.getLuckyState(transactions);
log.getAllPlusesAndMinuses(allProcess);


log.getGoal(applesCount, goal);