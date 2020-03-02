// JavaScript source code

var start = prompt("Enter the start:");
var end = prompt("Enter the end:");
var step = prompt("Enter the step:");

var startNum = parseInt(start);
var endNum = parseInt(end);
var stepNum = parseInt(step);

var genArray = [];

function getArray(){
    var arrayNum = startNum
    genArray.push(startNum);
    if (stepNum >= 0) {
        for (i = startNum; i >= startNum && i< endNum; i++){
            arrayNum = arrayNum + stepNum;
            genArray.push(arrayNum);
        }
    }
}

getArray();

console.log(genArray);

var genStr = genArray.toString();

console.log(genStr);

document.getElementById("array").innerHTML = "me";
