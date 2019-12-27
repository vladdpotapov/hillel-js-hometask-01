let number01;
let number02;
let result;

function parseValues() {
    number01 = document.getElementById('number01').value;
    number01 = parseInt(number01);
    number02 = document.getElementById('number02').value;
    number02 = parseInt(number02);
}

function addition() {
    parseValues();
    result = number01 + number02;
    document.getElementById('result').innerHTML = result;
}

function subtraction() {
    parseValues();
    result = number01 - number02;
    document.getElementById('result').innerHTML = result;
}

function multiplication() {
    parseValues();
    result = number01 * number02;
    document.getElementById('result').innerHTML = result;
}

function division() {
    parseValues();
    result = number01 / number02;
    document.getElementById('result').innerHTML = result;
}