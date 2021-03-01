const boxStatement = applesCount => {
    if(applesCount === 0){
        return "Ящик пуст";
    } else if(applesCount > 0){
        return "Ящик полон";
    } else if(applesCount < 0){
        return "Кредитная коробка (как вы умуидрились собрать " + applesCount + " яблок хмммм)";
    }
}
let applesCount = 0;
console.log("Ну надо же, в ящике " + applesCount + " яблок");
console.log(boxStatement(applesCount));

applesCount += 10;
console.log("Ну надо же, в ящике " + applesCount + " яблок");
console.log(boxStatement(applesCount));

applesCount -= 10;
console.log("Ну надо же, в ящике " + applesCount + " яблок");
console.log(boxStatement(applesCount));

applesCount -= 100;
console.log("Ну надо же, в ящике " + applesCount + " яблок");
console.log(boxStatement(applesCount));