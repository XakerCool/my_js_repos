window.addEventListener("DOMContentLoaded", (event) => {
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
        boxStatement: function(amount) {
            if(amount === 0){
                return "Ящик пуст" + " | " + "В коробке " + box.getQuantityString(amount);
            } else if(amount > 0){
                return "Ящик полон" + " | " + "В коробке " + box.getQuantityString(amount);
            } else if(amount < 0){
                return "Кредитная коробка" + " | " + "В коробке " + box.getQuantityString(amount);
            }
        },
        getGoal: function(amount, goal) {
            if(amount >= goal){
                return "Вау! Мы собрали " + box.getQuantityString(amount);
            } else{
                return "Ты не смог собрать все, что нам нужно Джон, теперь ты знаешь что будет";
            }
        },
        logTransaction: function(transaction) {
            if(transaction < 0){
                return "Ты потерял " + box.getQuantityString(transaction);
            } else if(transaction > 0){
                return "Ты получил " + box.getQuantityString(transaction);
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
    }
    const trueCasing = ([form1, form2, form3]) => {
        return (n) => {
            let absN = Math.abs(n);
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
    }
    class Box{
        amount;
        trueCasing;
        listeners = {
            "amountChanged": [], // (amount, transaction, box) => void;
            "allTransactions": []
        };
        constructor (amount = 0, form1, form2, form3){
            this.amount = amount;
            this.trueCasing = trueCasing([form1, form2, form3]);
        }
        
        addEventListener(eventName, handler) {
            this.listeners[eventName].push(handler);
        }
        
        changeAmount(transaction) {
            this.amount += transaction;
            
            this.listeners["amountChanged"]
            .forEach(handler => handler(this.amount, transaction, this));
            this.listeners["allTransactions"].push(transaction);
        }
        getQuantityString(amount){
            return this.trueCasing(amount);
        }
        
    }


    const content = document.getElementById("content");


    const goal = 100;
    const box = new Box(0, "яблоко", "яблока", "яблок");
    // const box = new Box(0, "груша", "груши", "груш");

    box.addEventListener("amountChanged", (_, transaction) => {
        console.log("Новая транзакция: ", log.logTransaction(transaction));
        p_container = e("p", { class: "p_container" }, e("span", { class : "transaction_text" }, log.logTransaction(transaction)));
        content.append(p_container);
    });
    
    box.addEventListener("amountChanged", (amount) => {
        console.log("Новое состояние коробки: ", log.boxStatement(amount));

        
        if(log.boxStatement(amount).substring(0, log.boxStatement(amount).indexOf("|") - 1) === "Кредитная коробка") {
            content.append(img_credit_box());
        }
        if(log.boxStatement(amount).substring(0, log.boxStatement(amount).indexOf("|") - 1) === "Ящик пуст") {
            content.append(img_empty_box());
        }
        if(log.boxStatement(amount).substring(0, log.boxStatement(amount).indexOf("|") - 1) === "Ящик полон") {
            content.append(img_full_box());
        }
    });


    let transactions = [];
    let applesAmounts = analitics.createRandomArray(-15, 30) (30)

    while(box.amount < goal && applesAmounts.length > 0){
        let apples = applesAmounts.shift();
        transactions.push(apples);

        box.changeAmount(apples);
        // console.log(log.logTransaction(apples));
        // console.log(log.boxStatement(box.amount));
    }

    let allProcess = transactions.map(transaction => transaction > 0 ? "Доход" : "Расход");

    log.getStatistic(box.listeners["allTransactions"]);

    console.log(log.getLuckyState(transactions));
    console.log(log.getAllPlusesAndMinuses(allProcess));


    console.log(log.getGoal(box.amount, goal));


    //test
    console.log("=======================================");
    content.append(e("p", {}, "===================TEST===================="));
    content.append(log.logTransaction(-10));
    if(log.boxStatement(-10).substring(0, log.boxStatement(-10).indexOf("|") - 1) === "Кредитная коробка") {
        content.append(img_credit_box());
    }
    content.append(log.logTransaction(0));
    if(log.boxStatement(0).substring(0, log.boxStatement(0).indexOf("|") - 1) === "Ящик пуст") {
        content.append(img_empty_box());
    }
    content.append(log.logTransaction(10));
    if(log.boxStatement(10).substring(0, log.boxStatement(10).indexOf("|") - 1) === "Ящик полон") {
        content.append(img_full_box());
    }

});


const e = (tag, attributes = {}, ...children) => {
    const element = document.createElement(tag);
  
    Object.entries(attributes)
      .forEach(([key, value]) => {
        if (key === "style") {
          Object.entries(value).forEach(([cssKey, cssValue]) => {
            element.style[cssKey] = cssValue;
          });
        } else {
          element[key] = value;
        }
  
      });
  
    element.append(...children);
  
    return element;
}

let p_container = e("p", {
    class: "p_container"
});

const img_full_box = () => e("img", {
    src: "full_box.png",
    style: {
        width: "200px",
        height: "200px",
        display: "block"
    }
});

const img_empty_box = () => e("img", {
    src: "empty_box.png",
    style: {
        width: "200px",
        height: "200px",
        display: "block"
    }
});

const img_credit_box = () => e("img", {
    src: "credit_box.png",
    style: {
        width: "200px",
        height: "200px",
        display: "block"
    }
});

