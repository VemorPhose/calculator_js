let total = 0;
let operand = 0;
let operator = '+';
let floatFlag = false;
let equalFlag = false;
let floatFactor = 1;

function manageTotal(){
    if (floatFlag) {
        floatFactor = 1;
        floatFlag = false;
    }
    if (equalFlag) {
        equalFlag = false;
        document.getElementById('totalDisplay').innerHTML = total;
        document.getElementById('currentDisplay').innerHTML = total;
        return;
    }
    if (operator == '+') {
        total += operand;
    }
    if (operator == '-') {
        total -= operand;
    }
    if (operator == '*') {
        total *= operand;
    }
    if (operator == '/') {
        total /= operand;
    }
    document.getElementById('totalDisplay').innerHTML = total;
    document.getElementById('currentDisplay').innerHTML = total;
}

function ac(){
    if (floatFlag) {
        floatFactor = 1;
        floatFlag = false;
    }
    total = 0; operand = 0;
    document.getElementById("currentDisplay").innerHTML = operand;
    document.getElementById("totalDisplay").innerHTML = total;
    return;    
}

function c(){
    manageTotal();
    if (operand == 0) {
        total = 0;
        document.getElementById("totalDisplay").innerHTML = total;
    }
    operand = 0;
    document.getElementById("currentDisplay").innerHTML = operand;
}

function bcksp(){
    if (floatFlag) {
        if (floatFactor == 1) {
            floatFlag = false;
        }
        else {
            floatFactor /= 10;
            let s = operand.toString();
            s = s.slice(0, -1);
            operand = Number(s);
        }
    }
    else {
        operand -= operand % 10;
        operand /= 10;
    }
    document.getElementById("currentDisplay").innerHTML = operand;
}

function nine(){
    if (floatFlag) floatFactor *= 10;
    else operand *= 10;
    operand += 9/floatFactor;
    document.getElementById("currentDisplay").innerHTML = operand;
}

function eight(){
    if (floatFlag) floatFactor *= 10;
    else operand *= 10;
    operand += 8/floatFactor;
    document.getElementById("currentDisplay").innerHTML = operand;
}

function seven(){
    if (floatFlag) floatFactor *= 10;
    else operand *= 10;
    operand += 7/floatFactor;
    document.getElementById("currentDisplay").innerHTML = operand;
}

function six(){
    if (floatFlag) floatFactor *= 10;
    else operand *= 10;
    operand += 6/floatFactor;
    document.getElementById("currentDisplay").innerHTML = operand;
}

function five(){
    if (floatFlag) floatFactor *= 10;
    else operand *= 10;
    operand += 5/floatFactor;
    document.getElementById("currentDisplay").innerHTML = operand;
}

function four(){
    if (floatFlag) floatFactor *= 10;
    else operand *= 10;
    operand += 4/floatFactor;
    document.getElementById("currentDisplay").innerHTML = operand;
}

function three(){
    if (floatFlag) floatFactor *= 10;
    else operand *= 10;
    operand += 3/floatFactor;
    document.getElementById("currentDisplay").innerHTML = operand;
}

function two(){
    if (floatFlag) floatFactor *= 10;
    else operand *= 10;
    operand += 2/floatFactor;
    document.getElementById("currentDisplay").innerHTML = operand;
}

function one(){
    if (floatFlag) floatFactor *= 10;
    else operand *= 10;
    operand += 1/floatFactor;
    document.getElementById("currentDisplay").innerHTML = operand;
}

function zero(){
    if (floatFlag) floatFactor *= 10;
    else operand *= 10;
    operand += 0/floatFactor;
    if (!floatFactor) document.getElementById("currentDisplay").innerHTML = operand;
    else document.getElementById("currentDisplay").innerHTML += '0';
}

let easterEggCnt = 0;
function easterEgg(){
    easterEggCnt++;
    if (easterEggCnt == 69) {
        document.body.style.fontFamily = 'sans-serif';
    }
}

function add(){
    manageTotal();
    operand = 0;
    operator = '+';
    document.getElementById('totalDisplay').innerHTML = total + ' ' + operator;
}

function subtract(){
    manageTotal();
    operand = 0;
    operator = '-';
    document.getElementById('totalDisplay').innerHTML = total + ' ' + operator;
}

function multiply(){
    manageTotal();
    operand = 0;
    operator = '*';
    document.getElementById('totalDisplay').innerHTML = total + ' ' + operator;
}

function divide(){
    manageTotal();
    operand = 0;
    operator = '/';
    document.getElementById('totalDisplay').innerHTML = total + ' ' + operator;
}

function equal(){
    document.getElementById('totalDisplay').innerHTML = total + ' ' + operator + ' ' + operand +  ' =';
    if (operator == '+') {
        total += operand;
        document.getElementById('currentDisplay').innerHTML = total;
    }
    if (operator == '-') {
        total -= operand;
        document.getElementById('currentDisplay').innerHTML = total;
    }
    if (operator == '*') {
        total *= operand;
        document.getElementById('currentDisplay').innerHTML = total;
    }
    if (operator == '/') {
        total /= operand;
        document.getElementById('currentDisplay').innerHTML = total;
    }
    floatFactor = 1;
    floatFlag = false;
    equalFlag = true;
}

function decimal(){
    if (!floatFlag) {
        floatFlag = true;
        document.getElementById('currentDisplay').innerHTML = operand + '.';
    }
}