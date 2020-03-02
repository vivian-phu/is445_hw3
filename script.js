// JavaScript source code

var start = prompt("Enter the start:");
var end = prompt("Enter the end:");
var step = prompt("Enter the step:");

var startNum = parseInt(start);
var endNum = parseInt(end);
var stepNum = parseInt(step);

var genArray = [];
var sumNum = 0;

function getArray(){
    var arrayNum = startNum
    sumNum = startNum;
    genArray.push(startNum);

    // if the step is positive
    if (stepNum >= 0) {
        for (i = startNum; i >= startNum && i< endNum; i++){
            arrayNum = arrayNum + stepNum;
            genArray.push(arrayNum);
            sumNum = sumNum + arrayNum;
        }
    }
    //if the step is negative
}

getArray();

document.getElementById("array").innerHTML = "The generated array is " + genArray;
document.getElementById("sum").innerHTML = "The generated sum is " + sumNum;

