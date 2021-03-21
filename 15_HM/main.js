const reverseStringRecursive = (string, tmp = "") => {
    let reversedString = tmp;
    reversedString += string[string.length - 1];
    string = string.substring(0, string.length - 1);
    if (string.length === 0) { 
        return reversedString;
    } else {
        return reverseStringRecursive(string, reversedString);
    }
}

let str = "Жили были";

console.log(reverseStringRecursive(str, ""));

// let str2 = "";
// while(str.length !== 0){
//     str2 += str[str.length-1];
//     str = str.substring(0, str.length - 1);
//     console.log(str2);
// }