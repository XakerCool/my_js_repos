const boxStatement = applesCount => {
    if(applesCount === 0){
        return "Ящик пуст" + " | " + "В коробке " + trueCasing("яблоко", "яблока", "яблок", applesCount);
    } else if(applesCount > 0){
        return "Ящик полон" + " | " + "В коробке " + trueCasing("яблоко", "яблока", "яблок", applesCount);
    } else if(applesCount < 0){
        return "Кредитная коробка" + " | " + "В коробке " + trueCasing("яблоко", "яблока", "яблок", applesCount);
    }
}
const trueCasing = (case1, case2, case3, applesCount) => {
    let tmp = Math.abs(applesCount);
    if(Math.trunc((tmp / 10) % 10) === 1){
        return applesCount + " " + case3;
    } else {
        if(tmp >= 2 && tmp <= 4){
            return applesCount + " " + case2;
        } else if(tmp === 1){
            return applesCount + " " + case1;
        } else{
            return applesCount + " " + case3;
        }
    }
}
const logGettingOrLosingApples = applesCount => {
    if(applesCount >= 0){
        console.log(trueCasing("яблоко", "яблока", "яблок", applesCount));
    }
}
const getRandomCount = (min, max) => {
    return min + Math.floor(Math.random()*(max-min));
}

const min = -5, max = 20;
const getGoal = (applesCount, goal, days) => {
    for(let i = 0; i < 10; i++){
        let tempNum = getRandomCount(min, max);
        if(tempNum < 0){
            console.log("Ты потерял " + trueCasing("яблоко", "яблока", "яблок", tempNum));
        } else if(tempNum > 0){
            console.log("Ты получил " + trueCasing("яблоко", "яблока", "яблок", tempNum));
        } else{
            console.log("Ты ничего не потерял");
        }
        applesCount += tempNum;
        console.log(boxStatement(applesCount));
    }
    if(applesCount < goal){
        console.log("Вы не смогли накопить достаточное кол-во яблок за отведённый промежуток времени, Джон. Как же ты теперь будешь отдавать нам долг?");
    } else{
        console.log("Ну чтож, ты накопил " + trueCasing("яблоко", "яблока", "яблок", applesCount) + " поздравляю, можешь пожить еще немного");
    }
}

const goal = 100;
const days = 10;
let applesCount = 0;

getGoal(applesCount, goal);