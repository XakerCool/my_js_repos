const boxStatement = applesCount => {
    if(applesCount === 0){
        return "Ящик пуст";
    } else if(applesCount > 0){
        return "Ящик полон";
    } else if(applesCount < 0){
        return "Кредитная коробка (как вы умуидрились собрать " + trueCasing("яблоко", "яблока", "яблок", applesCount) + " )";
    }
}
const trueCasing = (case1, case2, case3, applesCount) => {
    if(Math.trunc((applesCount / 10) % 10) === 1){
        return applesCount + " " + case3;
    } else {
        if(applesCount >= 2 && applesCount <= 4){
            return applesCount + " " + case2;
        } else if(applesCount === 1){
            return applesCount + " " + case1;
        } else{
            return applesCount + " " + case3;
        }
    }
}
let applesCount = 0;
console.log("Ну надо же, в ящике " + trueCasing("яблоко", "яблока", "яблок", applesCount));
console.log(boxStatement(applesCount));

applesCount = 11;
console.log("Ну надо же, в ящике " + trueCasing("яблоко", "яблока", "яблок", applesCount));
console.log(boxStatement(applesCount));

applesCount = 15;
console.log("Ну надо же, в ящике " + trueCasing("яблоко", "яблока", "яблок", applesCount));
console.log(boxStatement(applesCount));

applesCount = 1;
console.log("Ну надо же, в ящике " + trueCasing("яблоко", "яблока", "яблок", applesCount));
console.log(boxStatement(applesCount));

applesCount = 2;
console.log("Ну надо же, в ящике " + trueCasing("яблоко", "яблока", "яблок", applesCount));
console.log(boxStatement(applesCount));

applesCount = -30;
console.log("Ну надо же, в ящике " + trueCasing("яблоко", "яблока", "яблок", applesCount));
console.log(boxStatement(applesCount));