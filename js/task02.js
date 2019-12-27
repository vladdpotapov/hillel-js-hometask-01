let value01;
let value02;
let compareResult;

function comparing() {
    value01 = document.getElementById('value01').value;
    value02 = document.getElementById('value02').value;

    if (value01 === value02) {
        document.getElementById('compare-result').innerHTML = 'True';
    } else {
        document.getElementById('compare-result').innerHTML = 'False';
    }
}