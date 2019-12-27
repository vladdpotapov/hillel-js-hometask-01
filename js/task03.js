let number1;
let number2;
let number3;
let averageNumberResult;

function parseValue() {
    number1 = document.getElementById('num01').value;
    number1 = parseInt(number1);
    number2 = document.getElementById('num02').value;
    number2 = parseInt(number2);
    number3 = document.getElementById('num03').value;
    number3 = parseInt(number3);
}

function averageNumber() {
    parseValue();
    averageNumberResult = (number1 + number2 + number3) / 3;
    document.getElementById('average-result').innerHTML = averageNumberResult;
}