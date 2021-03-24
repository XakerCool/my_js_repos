//Сумма цифр в числе
const numberElementsSumRecursive = (number, sum = 0) => {
    if(number <= 0){
        return sum;
    } else{
        sum = number % 10 + sum;
        number = Math.trunc(number / 10);
        return numberElementsSumRecursive(number, sum);
    }
}

let num = 1234;
console.log("Оригинал - " + num);
console.log("Сумма - " + numberElementsSumRecursive(num));

//Палиндром ли?
const reverseStringRecursive = string => 
    string.length <= 0 ? string : reverseStringRecursive(string.slice(1)) + string[0];

const isPalindromRecursive = string =>{
    if(string.length === 0 || string.length === 1){
        return true;
    }
    if(string.length === 2){
        return string[0] === string[string.length - 1] && isPalindromRecursive("");
    }
    if(string.length === 3){
        return string[0] === string[string.length - 1] && isPalindromRecursive(string[2]);
    }
    if (string.length > 3){
        if(string === reverseStringRecursive(string)){
            return true;
        } else{
            return false;
        }
    }
}

let strings = ["a", "aa", "asa", "asd", "шалаш", "ШаЛаШ", "каКаду"];
strings.forEach(string => console.log(string + " - палиндром? Ответ - " + isPalindromRecursive(string.toLowerCase())));



//3* увы не осилил