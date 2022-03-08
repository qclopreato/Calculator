const zero = 0;
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;
let begValue = 0;
let zeroCount = 0;
let digCount = 0;

document.getElementById(`one`).addEventListener(`click`, function(){
    if (digCount === 0){
        document.getElementById(`firstLine--one`).innerHTML = begValue + one;
        digCount++;
    }
    else if (digCount === 1){
        document.getElementById(`firstLine--two`).innerHTML = begValue + one;
        digCount++;
    }
    else if (digCount === 2){
        document.getElementById(`firstLine--three`).innerHTML = begValue + one;
        digCount++;
    }
    else if (digCount === 3){
        document.getElementById(`firstLine--four`).innerHTML = begValue + one;
        digCount++;
    }
    else if (digCount === 4){
        document.getElementById(`firstLine--five`).innerHTML = begValue + one;
        digCount++;
    }
    else if (digCount === 5){
        document.getElementById(`firstLine--six`).innerHTML = begValue + one;
        digCount++;
    }
    else if (digCount === 6){
        document.getElementById(`firstLine--seven`).innerHTML = begValue + one;
        digCount++;
    }
    else if (digCount === 7){
        document.getElementById(`firstLine--eight`).innerHTML = begValue + one;
        digCount++;
    }
    else if (digCount === 8){
        document.getElementById(`firstLine--nine`).innerHTML = begValue + one;
        digCount++;
    }
    else if (digCount === 9){
        digCount = 9;
    }
});

document.getElementById(`two`).addEventListener(`click`, function(){
    if (digCount === 0){
        document.getElementById(`firstLine--one`).innerHTML = begValue + two;
        digCount++;
    }
    else if (digCount === 1){
        document.getElementById(`firstLine--two`).innerHTML = begValue + two;
        digCount++;
    }
    else if (digCount === 2){
        document.getElementById(`firstLine--three`).innerHTML = begValue + two;
        digCount++;
    }
    else if (digCount === 3){
        document.getElementById(`firstLine--four`).innerHTML = begValue + two;
        digCount++;
    }
    else if (digCount === 4){
        document.getElementById(`firstLine--five`).innerHTML = begValue + two;
        digCount++;
    }
    else if (digCount === 5){
        document.getElementById(`firstLine--six`).innerHTML = begValue + two;
        digCount++;
    }
    else if (digCount === 6){
        document.getElementById(`firstLine--seven`).innerHTML = begValue + two;
        digCount++;
    }
    else if (digCount === 7){
        document.getElementById(`firstLine--eight`).innerHTML = begValue + two;
        digCount++;
    }
    else if (digCount === 8){
        document.getElementById(`firstLine--nine`).innerHTML = begValue + two;
        digCount++;
    }
    else if (digCount === 9){
        digCount = 9;
    }
});