let fullNumber;
let figure01;
let figure02;
let figure03;
let figure04;
let figure05;
let separatedFigures;

function calculate() {
    fullNumber = document.getElementById('five-f-number').value;
    fullNumber = parseInt(fullNumber);

    figure01 = fullNumber / 10000;
    figure01 = parseInt(figure01);

    figure02 = fullNumber / 1000 % 10;
    figure02 = parseInt(figure02);

    figure03 = fullNumber / 100 % 10;
    figure03 = parseInt(figure03);

    figure04 = fullNumber / 10 % 10;
    figure04 = parseInt(figure04);

    figure05 = fullNumber % 10;

    separatedFigures = figure01 + ' ' + figure02 + ' ' + figure03 + ' ' + figure04 + ' ' + figure05; 
    document.getElementById('figure-result').innerHTML = separatedFigures;
}