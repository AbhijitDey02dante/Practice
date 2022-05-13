"use strict";
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const button = document.querySelector('button');
const numArray = [];
const stringArray = [];
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    else if (typeof a === 'string' && typeof b === 'string')
        return a + "" + b;
    else
        return +a + +b;
}
function result(resultObj) {
    console.log(resultObj.val);
}
button.addEventListener('click', () => {
    const a = num1.value;
    const b = num2.value;
    const inputNumber = add(1, 2);
    numArray.push(inputNumber);
    const inputString = add('1', '2');
    stringArray.push(inputString);
    result({ val: 4, timestamp: new Date() });
    console.log(inputNumber, inputString);
});
