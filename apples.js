const analitics = {
    randomInt: (min,max) => min + Math.floor(Math.random()*(max-min)),
    createArray: (mapFunction = index => index) => length => Array.from({ length }, (_, index) => mapFunction(index)),
    createRandomArray: (min, max) => analitics.createArray(() => analitics.randomInt(min, max)),
    getNegative: array => array.filter(n => n < 0),
    getPositive: array => array.filter(n => n > 0),
    getSum: array => array.reduce((sum, number) => sum + number, 0),
    getAverage: array => Math.trunc(analitics.getSum(array) / array.length),
};
const constructBox = (amount, goal) => ({
    amount,
    goal,

    changeAmount: function(transaction) {
        this.amount += transaction;
    },
    trueCasing: function(form1, form2, form3) {
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
    boxStatement: function() {
        if(this.amount === 0){
            return "Ящик пуст" + " | " + "В коробке " + applesCasing(this.amount);
        } else if(this.amount > 0){
            return "Ящик полон" + " | " + "В коробке " + applesCasing(this.amount);
        } else if(this.amount < 0){
            return "Кредитная коробка" + " | " + "В коробке " + applesCasing(this.amount);
        }
    },
    getGoal: function() {
        if(this.amount >= goal){
            return "Вау! Мы собрали " + applesCasing(this.amount);
        } else{
            return "Ты не смог собрать все, что нам нужно Джон, теперь ты знаешь что будет";
        }
    },
    logTransaction: function(transaction) {
        if(transaction < 0){
            return "Ты потерял " + applesCasing(transaction);
        } else if(transaction > 0){
            return "Ты получил " + applesCasing(transaction);
        } else{
            return "Ты ничего не потерял";
        }
    },
    getStatistic: function(transactions) {
        let pluses = analitics.getPositive(transactions);
        let minuses = analitics.getNegative(transactions);
    
        console.log("Доход: " + analitics.getSum(pluses));
        console.log("Расход: " + analitics.getSum(minuses));

        console.log("Средний доход: " + analitics.getAverage(pluses));
        console.log("Средний расход: " + analitics.getAverage(minuses));
    },
    getLuckyState: function(transactions) {
        if(transactions.every(trans => trans > 0)){
            return "Черт побери Джон, ни одной потери! Да ты везунчик";
        } else{
            return "Двум потерям не бывать а одной не миновать, да Джон?";
        }
    },
    getAllPlusesAndMinuses: function(allProcess) {
        return "Все доходы или расходы: " + allProcess;
    }
});

const goal = 100;
const box = constructBox(0, 0, goal);
const applesCasing = box.trueCasing("яблоко", "яблока", "яблок");



const days = 10;

let transactions = [];
let applesAmounts = analitics.createRandomArray(-15, 30) (30)

while(box.amount < goal && applesAmounts.length > 0){
    let apples = applesAmounts.shift();
    transactions.push(apples);

    box.changeAmount(apples);
    console.log(box.logTransaction(apples));
    console.log(box.boxStatement());
}

let allProcess = transactions.map(transaction => transaction > 0 ? "Доход" : "Расход");

box.getStatistic(transactions);

console.log(box.getLuckyState(transactions));
console.log(box.getAllPlusesAndMinuses(allProcess));


console.log(box.getGoal());