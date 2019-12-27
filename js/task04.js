let string01;
let string02;
let string03;
let concatenationResult;

function concatenate() {
    string01 = document.getElementById('string01').value;
    string02 = document.getElementById('string02').value;
    string03 = document.getElementById('string03').value;

    concatenationResult = string01 + ' ' + string02 + ' ' + string03;

    alert(concatenationResult);
}