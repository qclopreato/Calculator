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
let cycleCounter = 0;
let begValue = 0;
let zeroCount = 0;
let digCount = 0;
let digCountSecond = 0;
let flMash = 0;
let slMash = 0;
let finalAnswer = 0;
const zeroButtSecond = document.getElementById(`zeroSecond`);
const oneButtSecond = document.getElementById(`oneSecond`);
const twoButtSecond = document.getElementById(`twoSecond`);
const threeButtSecond = document.getElementById(`threeSecond`);
const fourButtSecond = document.getElementById(`fourSecond`);
const fiveButtSecond = document.getElementById(`fiveSecond`);
const sixButtSecond = document.getElementById(`sixSecond`);
const sevenButtSecond = document.getElementById(`sevenSecond`);
const eightButtSecond = document.getElementById(`eightSecond`);
const nineButtSecond = document.getElementById(`nineSecond`);
const addButt = document.getElementById(`add`);
const subButt = document.getElementById(`subtract`);
const mulButt = document.getElementById(`multiply`);
const divButt = document.getElementById(`divide`);
addButt.disabled = false;
subButt.disabled = false;
mulButt.disabled = false;
divButt.disabled = false;
zeroButtSecond.disabled = true;
oneButtSecond.disabled = true;
twoButtSecond.disabled = true;
threeButtSecond.disabled = true;
fourButtSecond.disabled = true;
fiveButtSecond.disabled = true;
sixButtSecond.disabled = true;
sevenButtSecond.disabled = true;
eightButtSecond.disabled = true;
nineButtSecond.disabled = true;


    document.getElementById(`zero`).addEventListener(`click`, function(){
    if (digCount === 0){
        document.getElementById(`firstLine--one`).innerHTML = begValue + zero;
        digCount++;
    }
    else if (digCount === 1){
        document.getElementById(`firstLine--two`).innerHTML = begValue + zero;
        digCount++;
    }
    else if (digCount === 2){
        document.getElementById(`firstLine--three`).innerHTML = begValue + zero;
        digCount++;
    }
    else if (digCount === 3){
        document.getElementById(`firstLine--four`).innerHTML = begValue + zero;
        digCount++;
    }
    else if (digCount === 4){
        document.getElementById(`firstLine--five`).innerHTML = begValue + zero;
        digCount++;
    }
    else if (digCount === 5){
        document.getElementById(`firstLine--six`).innerHTML = begValue + zero;
        digCount++;
    }
    else if (digCount === 6){
        document.getElementById(`firstLine--seven`).innerHTML = begValue + zero;
        digCount++;
    }
    else if (digCount === 7){
        document.getElementById(`firstLine--eight`).innerHTML = begValue + zero;
        digCount++;
    }
    else if (digCount === 8){
        document.getElementById(`firstLine--nine`).innerHTML = begValue + zero;
        digCount++;
    }
    else if (digCount === 9){
        digCount = 9;
    }
});

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

document.getElementById(`three`).addEventListener(`click`, function(){
    if (digCount === 0){
        document.getElementById(`firstLine--one`).innerHTML = begValue + three;
        digCount++;
    }
    else if (digCount === 1){
        document.getElementById(`firstLine--two`).innerHTML = begValue + three;
        digCount++;
    }
    else if (digCount === 2){
        document.getElementById(`firstLine--three`).innerHTML = begValue + three;
        digCount++;
    }
    else if (digCount === 3){
        document.getElementById(`firstLine--four`).innerHTML = begValue + three;
        digCount++;
    }
    else if (digCount === 4){
        document.getElementById(`firstLine--five`).innerHTML = begValue + three;
        digCount++;
    }
    else if (digCount === 5){
        document.getElementById(`firstLine--six`).innerHTML = begValue + three;
        digCount++;
    }
    else if (digCount === 6){
        document.getElementById(`firstLine--seven`).innerHTML = begValue + three;
        digCount++;
    }
    else if (digCount === 7){
        document.getElementById(`firstLine--eight`).innerHTML = begValue + three;
        digCount++;
    }
    else if (digCount === 8){
        document.getElementById(`firstLine--nine`).innerHTML = begValue + three;
        digCount++;
    }
    else if (digCount === 9){
        digCount = 9;
    }
});

document.getElementById(`four`).addEventListener(`click`, function(){
    if (digCount === 0){
        document.getElementById(`firstLine--one`).innerHTML = begValue + four;
        digCount++;
    }
    else if (digCount === 1){
        document.getElementById(`firstLine--two`).innerHTML = begValue + four;
        digCount++;
    }
    else if (digCount === 2){
        document.getElementById(`firstLine--three`).innerHTML = begValue + four;
        digCount++;
    }
    else if (digCount === 3){
        document.getElementById(`firstLine--four`).innerHTML = begValue + four;
        digCount++;
    }
    else if (digCount === 4){
        document.getElementById(`firstLine--five`).innerHTML = begValue + four;
        digCount++;
    }
    else if (digCount === 5){
        document.getElementById(`firstLine--six`).innerHTML = begValue + four;
        digCount++;
    }
    else if (digCount === 6){
        document.getElementById(`firstLine--seven`).innerHTML = begValue + four;
        digCount++;
    }
    else if (digCount === 7){
        document.getElementById(`firstLine--eight`).innerHTML = begValue + four;
        digCount++;
    }
    else if (digCount === 8){
        document.getElementById(`firstLine--nine`).innerHTML = begValue + four;
        digCount++;
    }
    else if (digCount === 9){
        digCount = 9;
    }
});

document.getElementById(`five`).addEventListener(`click`, function(){
    if (digCount === 0){
        document.getElementById(`firstLine--one`).innerHTML = begValue + five;
        digCount++;
    }
    else if (digCount === 1){
        document.getElementById(`firstLine--two`).innerHTML = begValue + five;
        digCount++;
    }
    else if (digCount === 2){
        document.getElementById(`firstLine--three`).innerHTML = begValue + five;
        digCount++;
    }
    else if (digCount === 3){
        document.getElementById(`firstLine--four`).innerHTML = begValue + five;
        digCount++;
    }
    else if (digCount === 4){
        document.getElementById(`firstLine--five`).innerHTML = begValue + five;
        digCount++;
    }
    else if (digCount === 5){
        document.getElementById(`firstLine--six`).innerHTML = begValue + five;
        digCount++;
    }
    else if (digCount === 6){
        document.getElementById(`firstLine--seven`).innerHTML = begValue + five;
        digCount++;
    }
    else if (digCount === 7){
        document.getElementById(`firstLine--eight`).innerHTML = begValue + five;
        digCount++;
    }
    else if (digCount === 8){
        document.getElementById(`firstLine--nine`).innerHTML = begValue + five;
        digCount++;
    }
    else if (digCount === 9){
        digCount = 9;
    }
});

document.getElementById(`six`).addEventListener(`click`, function(){
    if (digCount === 0){
        document.getElementById(`firstLine--one`).innerHTML = begValue + six;
        digCount++;
    }
    else if (digCount === 1){
        document.getElementById(`firstLine--two`).innerHTML = begValue + six;
        digCount++;
    }
    else if (digCount === 2){
        document.getElementById(`firstLine--three`).innerHTML = begValue + six;
        digCount++;
    }
    else if (digCount === 3){
        document.getElementById(`firstLine--four`).innerHTML = begValue + six;
        digCount++;
    }
    else if (digCount === 4){
        document.getElementById(`firstLine--five`).innerHTML = begValue + six;
        digCount++;
    }
    else if (digCount === 5){
        document.getElementById(`firstLine--six`).innerHTML = begValue + six;
        digCount++;
    }
    else if (digCount === 6){
        document.getElementById(`firstLine--seven`).innerHTML = begValue + six;
        digCount++;
    }
    else if (digCount === 7){
        document.getElementById(`firstLine--eight`).innerHTML = begValue + six;
        digCount++;
    }
    else if (digCount === 8){
        document.getElementById(`firstLine--nine`).innerHTML = begValue + six;
        digCount++;
    }
    else if (digCount === 9){
        digCount = 9;
    }
});

document.getElementById(`seven`).addEventListener(`click`, function(){
    if (digCount === 0){
        document.getElementById(`firstLine--one`).innerHTML = begValue + seven;
        digCount++;
    }
    else if (digCount === 1){
        document.getElementById(`firstLine--two`).innerHTML = begValue + seven;
        digCount++;
    }
    else if (digCount === 2){
        document.getElementById(`firstLine--three`).innerHTML = begValue + seven;
        digCount++;
    }
    else if (digCount === 3){
        document.getElementById(`firstLine--four`).innerHTML = begValue + seven;
        digCount++;
    }
    else if (digCount === 4){
        document.getElementById(`firstLine--five`).innerHTML = begValue + seven;
        digCount++;
    }
    else if (digCount === 5){
        document.getElementById(`firstLine--six`).innerHTML = begValue + seven;
        digCount++;
    }
    else if (digCount === 6){
        document.getElementById(`firstLine--seven`).innerHTML = begValue + seven;
        digCount++;
    }
    else if (digCount === 7){
        document.getElementById(`firstLine--eight`).innerHTML = begValue + seven;
        digCount++;
    }
    else if (digCount === 8){
        document.getElementById(`firstLine--nine`).innerHTML = begValue + seven;
        digCount++;
    }
    else if (digCount === 9){
        digCount = 9;
    }
});

document.getElementById(`eight`).addEventListener(`click`, function(){
    if (digCount === 0){
        document.getElementById(`firstLine--one`).innerHTML = begValue + eight;
        digCount++;
    }
    else if (digCount === 1){
        document.getElementById(`firstLine--two`).innerHTML = begValue + eight;
        digCount++;
    }
    else if (digCount === 2){
        document.getElementById(`firstLine--three`).innerHTML = begValue + eight;
        digCount++;
    }
    else if (digCount === 3){
        document.getElementById(`firstLine--four`).innerHTML = begValue + eight;
        digCount++;
    }
    else if (digCount === 4){
        document.getElementById(`firstLine--five`).innerHTML = begValue + eight;
        digCount++;
    }
    else if (digCount === 5){
        document.getElementById(`firstLine--six`).innerHTML = begValue + eight;
        digCount++;
    }
    else if (digCount === 6){
        document.getElementById(`firstLine--seven`).innerHTML = begValue + eight;
        digCount++;
    }
    else if (digCount === 7){
        document.getElementById(`firstLine--eight`).innerHTML = begValue + eight;
        digCount++;
    }
    else if (digCount === 8){
        document.getElementById(`firstLine--nine`).innerHTML = begValue + eight;
        digCount++;
    }
    else if (digCount === 9){
        digCount = 9;
    }
});

document.getElementById(`nine`).addEventListener(`click`, function(){
    if (digCount === 0){
        document.getElementById(`firstLine--one`).innerHTML = begValue + nine;
        digCount++;
    }
    else if (digCount === 1){
        document.getElementById(`firstLine--two`).innerHTML = begValue + nine;
        digCount++;
    }
    else if (digCount === 2){
        document.getElementById(`firstLine--three`).innerHTML = begValue + nine;
        digCount++;
    }
    else if (digCount === 3){
        document.getElementById(`firstLine--four`).innerHTML = begValue + nine;
        digCount++;
    }
    else if (digCount === 4){
        document.getElementById(`firstLine--five`).innerHTML = begValue + nine;
        digCount++;
    }
    else if (digCount === 5){
        document.getElementById(`firstLine--six`).innerHTML = begValue + nine;
        digCount++;
    }
    else if (digCount === 6){
        document.getElementById(`firstLine--seven`).innerHTML = begValue + nine;
        digCount++;
    }
    else if (digCount === 7){
        document.getElementById(`firstLine--eight`).innerHTML = begValue + nine;
        digCount++;
    }
    else if (digCount === 8){
        document.getElementById(`firstLine--nine`).innerHTML = begValue + nine;
        digCount++;
    }
    else if (digCount === 9){
        digCount = 9;
    }
});


/*if (cycleCounter === 1){*/
document.getElementById(`add`).addEventListener(`click`, function(){
    const zeroButt = document.getElementById(`zero`);
    const oneButt = document.getElementById(`one`);
    const twoButt = document.getElementById(`two`);
    const threeButt = document.getElementById(`three`);
    const fourButt = document.getElementById(`four`);
    const fiveButt = document.getElementById(`five`);
    const sixButt = document.getElementById(`six`);
    const sevenButt = document.getElementById(`seven`);
    const eightButt = document.getElementById(`eight`);
    const nineButt = document.getElementById(`nine`);
    zeroButt.disabled = true;
    oneButt.disabled = true;
    twoButt.disabled = true;
    threeButt.disabled = true;
    fourButt.disabled = true;
    fiveButt.disabled = true;
    sixButt.disabled = true;
    sevenButt.disabled = true;
    eightButt.disabled = true;
    nineButt.disabled = true;

    zeroButtSecond.disabled = false;
    oneButtSecond.disabled = false;
    twoButtSecond.disabled = false;
    threeButtSecond.disabled = false;
    fourButtSecond.disabled = false;
    fiveButtSecond.disabled = false;
    sixButtSecond.disabled = false;
    sevenButtSecond.disabled = false;
    eightButtSecond.disabled = false;
    nineButtSecond.disabled = false;

    addButt.disabled = false;
    subButt.disabled = true;
    mulButt.disabled = true;
    divButt.disabled = true;
    cycleCounter = 2;
    if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == true){
        flMash = 0;
    } 
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == true){
        flMash = parseFloat(document.getElementById(`firstLine--one`).innerHTML);
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--seven`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}${parseFloat(document.getElementById(`firstLine--six`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--seven`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--eight`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}${parseFloat(document.getElementById(`firstLine--six`).innerHTML)}${parseFloat(document.getElementById(`firstLine--seven`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--seven`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--eight`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--nine`).innerHTML)) == false){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}${parseFloat(document.getElementById(`firstLine--six`).innerHTML)}${parseFloat(document.getElementById(`firstLine--seven`).innerHTML)}${parseFloat(document.getElementById(`firstLine--eight`).innerHTML)}`
    }

/* EDIT BELOW */
console.log(flMash);
document.getElementById(`zeroSecond`).addEventListener(`click`, function(){
    if (digCountSecond === 0){
        document.getElementById(`secondLine--one`).innerHTML = begValue + zero;
        digCountSecond++;
    }
    else if (digCountSecond === 1){
        document.getElementById(`secondLine--two`).innerHTML = begValue + zero;
        digCountSecond++;
    }
    else if (digCountSecond === 2){
        document.getElementById(`secondLine--three`).innerHTML = begValue + zero;
        digCountSecond++;
    }
    else if (digCountSecond === 3){
        document.getElementById(`secondLine--four`).innerHTML = begValue + zero;
        digCountSecond++;
    }
    else if (digCountSecond === 4){
        document.getElementById(`secondLine--five`).innerHTML = begValue + zero;
        digCountSecond++;
    }
    else if (digCountSecond === 5){
        document.getElementById(`secondLine--six`).innerHTML = begValue + zero;
        digCountSecond++;
    }
    else if (digCountSecond === 6){
        document.getElementById(`secondLine--seven`).innerHTML = begValue + zero;
        digCountSecond++;
    }
    else if (digCountSecond === 7){
        document.getElementById(`secondLine--eight`).innerHTML = begValue + zero;
        digCountSecond++;
    }
    else if (digCountSecond === 8){
        document.getElementById(`secondLine--nine`).innerHTML = begValue + zero;
        digCountSecond++;
    }
    else if (digCountSecond === 9){
        digCountSecond = 9;
    }
});

document.getElementById(`oneSecond`).addEventListener(`click`, function(){
    if (digCountSecond === 0){
        document.getElementById(`secondLine--one`).innerHTML = begValue + one;
        digCountSecond++;
    }
    else if (digCountSecond === 1){
        document.getElementById(`secondLine--two`).innerHTML = begValue + one;
        digCountSecond++;
    }
    else if (digCountSecond=== 2){
        document.getElementById(`secondLine--three`).innerHTML = begValue + one;
        digCountSecond++;
    }
    else if (digCountSecond=== 3){
        document.getElementById(`secondLine--four`).innerHTML = begValue + one;
        digCountSecond++;
    }
    else if (digCountSecond=== 4){
        document.getElementById(`secondLine--five`).innerHTML = begValue + one;
        digCountSecond++;
    }
    else if (digCountSecond=== 5){
        document.getElementById(`secondLine--six`).innerHTML = begValue + one;
        digCountSecond++;
    }
    else if (digCountSecond=== 6){
        document.getElementById(`secondLine--seven`).innerHTML = begValue + one;
        digCountSecond++;
    }
    else if (digCountSecond=== 7){
        document.getElementById(`secondLine--eight`).innerHTML = begValue + one;
        digCountSecond++;
    }
    else if (digCountSecond=== 8){
        document.getElementById(`secondLine--nine`).innerHTML = begValue + one;
        digCountSecond++;
    }
    else if (digCountSecond=== 9){
        digCountSecond= 9;
    }
});

document.getElementById(`twoSecond`).addEventListener(`click`, function(){
    if (digCountSecond=== 0){
        document.getElementById(`secondLine--one`).innerHTML = begValue + two;
        digCountSecond++;
    }
    else if (digCountSecond=== 1){
        document.getElementById(`secondLine--two`).innerHTML = begValue + two;
        digCountSecond++;
    }
    else if (digCountSecond=== 2){
        document.getElementById(`secondLine--three`).innerHTML = begValue + two;
        digCountSecond++;
    }
    else if (digCountSecond=== 3){
        document.getElementById(`secondLine--four`).innerHTML = begValue + two;
        digCountSecond++;
    }
    else if (digCountSecond=== 4){
        document.getElementById(`secondLine--five`).innerHTML = begValue + two;
        digCountSecond++;
    }
    else if (digCountSecond=== 5){
        document.getElementById(`secondLine--six`).innerHTML = begValue + two;
        digCountSecond++;
    }
    else if (digCountSecond=== 6){
        document.getElementById(`secondLine--seven`).innerHTML = begValue + two;
        digCountSecond++;
    }
    else if (digCountSecond=== 7){
        document.getElementById(`secondLine--eight`).innerHTML = begValue + two;
        digCountSecond++;
    }
    else if (digCountSecond=== 8){
        document.getElementById(`secondLine--nine`).innerHTML = begValue + two;
        digCountSecond++;
    }
    else if (digCountSecond=== 9){
        digCountSecond= 9;
    }
});

document.getElementById(`threeSecond`).addEventListener(`click`, function(){
    if (digCountSecond=== 0){
        document.getElementById(`secondLine--one`).innerHTML = begValue + three;
        digCountSecond++;
    }
    else if (digCountSecond=== 1){
        document.getElementById(`secondLine--two`).innerHTML = begValue + three;
        digCountSecond++;
    }
    else if (digCountSecond=== 2){
        document.getElementById(`secondLine--three`).innerHTML = begValue + three;
        digCountSecond++;
    }
    else if (digCountSecond=== 3){
        document.getElementById(`secondLine--four`).innerHTML = begValue + three;
        digCountSecond++;
    }
    else if (digCountSecond=== 4){
        document.getElementById(`secondLine--five`).innerHTML = begValue + three;
        digCountSecond++;
    }
    else if (digCountSecond=== 5){
        document.getElementById(`secondLine--six`).innerHTML = begValue + three;
        digCountSecond++;
    }
    else if (digCountSecond=== 6){
        document.getElementById(`secondLine--seven`).innerHTML = begValue + three;
        digCountSecond++;
    }
    else if (digCountSecond=== 7){
        document.getElementById(`secondLine--eight`).innerHTML = begValue + three;
        digCountSecond++;
    }
    else if (digCountSecond=== 8){
        document.getElementById(`secondLine--nine`).innerHTML = begValue + three;
        digCountSecond++;
    }
    else if (digCountSecond=== 9){
        digCountSecond= 9;
    }
});

document.getElementById(`fourSecond`).addEventListener(`click`, function(){
    if (digCountSecond=== 0){
        document.getElementById(`secondLine--one`).innerHTML = begValue + four;
        digCountSecond++;
    }
    else if (digCountSecond=== 1){
        document.getElementById(`secondLine--two`).innerHTML = begValue + four;
        digCountSecond++;
    }
    else if (digCountSecond=== 2){
        document.getElementById(`secondLine--three`).innerHTML = begValue + four;
        digCountSecond++;
    }
    else if (digCountSecond=== 3){
        document.getElementById(`secondLine--four`).innerHTML = begValue + four;
        digCountSecond++;
    }
    else if (digCountSecond=== 4){
        document.getElementById(`secondLine--five`).innerHTML = begValue + four;
        digCountSecond++;
    }
    else if (digCountSecond=== 5){
        document.getElementById(`secondLine--six`).innerHTML = begValue + four;
        digCountSecond++;
    }
    else if (digCountSecond=== 6){
        document.getElementById(`secondLine--seven`).innerHTML = begValue + four;
        digCountSecond++;
    }
    else if (digCountSecond=== 7){
        document.getElementById(`secondLine--eight`).innerHTML = begValue + four;
        digCountSecond++;
    }
    else if (digCountSecond=== 8){
        document.getElementById(`secondLine--nine`).innerHTML = begValue + four;
        digCountSecond++;
    }
    else if (digCountSecond=== 9){
        digCountSecond= 9;
    }
});

document.getElementById(`fiveSecond`).addEventListener(`click`, function(){
    if (digCountSecond=== 0){
        document.getElementById(`secondLine--one`).innerHTML = begValue + five;
        digCountSecond++;
    }
    else if (digCountSecond=== 1){
        document.getElementById(`secondLine--two`).innerHTML = begValue + five;
        digCountSecond++;
    }
    else if (digCountSecond=== 2){
        document.getElementById(`secondLine--three`).innerHTML = begValue + five;
        digCountSecond++;
    }
    else if (digCountSecond=== 3){
        document.getElementById(`secondLine--four`).innerHTML = begValue + five;
        digCountSecond++;
    }
    else if (digCountSecond=== 4){
        document.getElementById(`secondLine--five`).innerHTML = begValue + five;
        digCountSecond++;
    }
    else if (digCountSecond=== 5){
        document.getElementById(`secondLine--six`).innerHTML = begValue + five;
        digCountSecond++;
    }
    else if (digCountSecond=== 6){
        document.getElementById(`secondLine--seven`).innerHTML = begValue + five;
        digCountSecond++;
    }
    else if (digCountSecond=== 7){
        document.getElementById(`secondLine--eight`).innerHTML = begValue + five;
        digCountSecond++;
    }
    else if (digCountSecond=== 8){
        document.getElementById(`secondLine--nine`).innerHTML = begValue + five;
        digCountSecond++;
    }
    else if (digCountSecond=== 9){
        digCountSecond= 9;
    }
});

document.getElementById(`sixSecond`).addEventListener(`click`, function(){
    if (digCountSecond=== 0){
        document.getElementById(`secondLine--one`).innerHTML = begValue + six;
        digCountSecond++;
    }
    else if (digCountSecond=== 1){
        document.getElementById(`secondLine--two`).innerHTML = begValue + six;
        digCountSecond++;
    }
    else if (digCountSecond=== 2){
        document.getElementById(`secondLine--three`).innerHTML = begValue + six;
        digCountSecond++;
    }
    else if (digCountSecond=== 3){
        document.getElementById(`secondLine--four`).innerHTML = begValue + six;
        digCountSecond++;
    }
    else if (digCountSecond=== 4){
        document.getElementById(`secondLine--five`).innerHTML = begValue + six;
        digCountSecond++;
    }
    else if (digCountSecond=== 5){
        document.getElementById(`secondLine--six`).innerHTML = begValue + six;
        digCountSecond++;
    }
    else if (digCountSecond=== 6){
        document.getElementById(`secondLine--seven`).innerHTML = begValue + six;
        digCountSecond++;
    }
    else if (digCountSecond=== 7){
        document.getElementById(`secondLine--eight`).innerHTML = begValue + six;
        digCountSecond++;
    }
    else if (digCountSecond=== 8){
        document.getElementById(`secondLine--nine`).innerHTML = begValue + six;
        digCountSecond++;
    }
    else if (digCountSecond=== 9){
        digCountSecond= 9;
    }
});

document.getElementById(`sevenSecond`).addEventListener(`click`, function(){
    if (digCountSecond=== 0){
        document.getElementById(`secondLine--one`).innerHTML = begValue + seven;
        digCountSecond++;
    }
    else if (digCountSecond=== 1){
        document.getElementById(`secondLine--two`).innerHTML = begValue + seven;
        digCountSecond++;
    }
    else if (digCountSecond=== 2){
        document.getElementById(`secondLine--three`).innerHTML = begValue + seven;
        digCountSecond++;
    }
    else if (digCountSecond=== 3){
        document.getElementById(`secondLine--four`).innerHTML = begValue + seven;
        digCountSecond++;
    }
    else if (digCountSecond=== 4){
        document.getElementById(`secondLine--five`).innerHTML = begValue + seven;
        digCountSecond++;
    }
    else if (digCountSecond=== 5){
        document.getElementById(`secondLine--six`).innerHTML = begValue + seven;
        digCountSecond++;
    }
    else if (digCountSecond=== 6){
        document.getElementById(`secondLine--seven`).innerHTML = begValue + seven;
        digCountSecond++;
    }
    else if (digCountSecond=== 7){
        document.getElementById(`secondLine--eight`).innerHTML = begValue + seven;
        digCountSecond++;
    }
    else if (digCountSecond=== 8){
        document.getElementById(`secondLine--nine`).innerHTML = begValue + seven;
        digCountSecond++;
    }
    else if (digCountSecond=== 9){
        digCountSecond= 9;
    }
});

document.getElementById(`eightSecond`).addEventListener(`click`, function(){
    if (digCountSecond=== 0){
        document.getElementById(`secondLine--one`).innerHTML = begValue + eight;
        digCountSecond++;
    }
    else if (digCountSecond=== 1){
        document.getElementById(`secondLine--two`).innerHTML = begValue + eight;
        digCountSecond++;
    }
    else if (digCountSecond=== 2){
        document.getElementById(`secondLine--three`).innerHTML = begValue + eight;
        digCountSecond++;
    }
    else if (digCountSecond=== 3){
        document.getElementById(`secondLine--four`).innerHTML = begValue + eight;
        digCountSecond++;
    }
    else if (digCountSecond=== 4){
        document.getElementById(`secondLine--five`).innerHTML = begValue + eight;
        digCountSecond++;
    }
    else if (digCountSecond=== 5){
        document.getElementById(`secondLine--six`).innerHTML = begValue + eight;
        digCountSecond++;
    }
    else if (digCountSecond=== 6){
        document.getElementById(`secondLine--seven`).innerHTML = begValue + eight;
        digCountSecond++;
    }
    else if (digCountSecond=== 7){
        document.getElementById(`secondLine--eight`).innerHTML = begValue + eight;
        digCountSecond++;
    }
    else if (digCountSecond=== 8){
        document.getElementById(`secondLine--nine`).innerHTML = begValue + eight;
        digCountSecond++;
    }
    else if (digCountSecond=== 9){
        digCountSecond= 9;
    }
});

document.getElementById(`nineSecond`).addEventListener(`click`, function(){
    if (digCountSecond=== 0){
        document.getElementById(`secondLine--one`).innerHTML = begValue + nine;
        digCountSecond++;
    }
    else if (digCountSecond=== 1){
        document.getElementById(`secondLine--two`).innerHTML = begValue + nine;
        digCountSecond++;
    }
    else if (digCountSecond=== 2){
        document.getElementById(`secondLine--three`).innerHTML = begValue + nine;
        digCountSecond++;
    }
    else if (digCountSecond=== 3){
        document.getElementById(`secondLine--four`).innerHTML = begValue + nine;
        digCountSecond++;
    }
    else if (digCountSecond=== 4){
        document.getElementById(`secondLine--five`).innerHTML = begValue + nine;
        digCountSecond++;
    }
    else if (digCountSecond=== 5){
        document.getElementById(`secondLine--six`).innerHTML = begValue + nine;
        digCountSecond++;
    }
    else if (digCountSecond=== 6){
        document.getElementById(`secondLine--seven`).innerHTML = begValue + nine;
        digCountSecond++;
    }
    else if (digCountSecond=== 7){
        document.getElementById(`secondLine--eight`).innerHTML = begValue + nine;
        digCountSecond++;
    }
    else if (digCountSecond=== 8){
        document.getElementById(`secondLine--nine`).innerHTML = begValue + nine;
        digCountSecond++;
    }
    else if (digCountSecond=== 9){
        digCountSecond= 9;
    }
});

});
document.getElementById(`subtract`).addEventListener(`click`, function(){
    const zeroButt = document.getElementById(`zero`);
    const oneButt = document.getElementById(`one`);
    const twoButt = document.getElementById(`two`);
    const threeButt = document.getElementById(`three`);
    const fourButt = document.getElementById(`four`);
    const fiveButt = document.getElementById(`five`);
    const sixButt = document.getElementById(`six`);
    const sevenButt = document.getElementById(`seven`);
    const eightButt = document.getElementById(`eight`);
    const nineButt = document.getElementById(`nine`);
    zeroButt.disabled = true;
    oneButt.disabled = true;
    twoButt.disabled = true;
    threeButt.disabled = true;
    fourButt.disabled = true;
    fiveButt.disabled = true;
    sixButt.disabled = true;
    sevenButt.disabled = true;
    eightButt.disabled = true;
    nineButt.disabled = true;

    zeroButtSecond.disabled = false;
    oneButtSecond.disabled = false;
    twoButtSecond.disabled = false;
    threeButtSecond.disabled = false;
    fourButtSecond.disabled = false;
    fiveButtSecond.disabled = false;
    sixButtSecond.disabled = false;
    sevenButtSecond.disabled = false;
    eightButtSecond.disabled = false;
    nineButtSecond.disabled = false;

    addButt.disabled = true;
    subButt.disabled = false;
    mulButt.disabled = true;
    divButt.disabled = true;
    cycleCounter = 3;
    if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == true){
        flMash = 0;
    } 
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == true){
        flMash = parseFloat(document.getElementById(`firstLine--one`).innerHTML);
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--seven`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}${parseFloat(document.getElementById(`firstLine--six`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--seven`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--eight`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}${parseFloat(document.getElementById(`firstLine--six`).innerHTML)}${parseFloat(document.getElementById(`firstLine--seven`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--seven`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--eight`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--nine`).innerHTML)) == false){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}${parseFloat(document.getElementById(`firstLine--six`).innerHTML)}${parseFloat(document.getElementById(`firstLine--seven`).innerHTML)}${parseFloat(document.getElementById(`firstLine--eight`).innerHTML)}`
    }
    console.log(flMash);
    document.getElementById(`zeroSecond`).addEventListener(`click`, function(){
        if (digCountSecond === 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + zero;
            digCountSecond;
        }
        else if (digCountSecond === 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 9){
            digCountSecond = 9;
        }
    });
    
    document.getElementById(`oneSecond`).addEventListener(`click`, function(){
        if (digCountSecond === 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond === 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`twoSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`threeSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`fourSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`fiveSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`sixSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`sevenSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`eightSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`nineSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
});
document.getElementById(`multiply`).addEventListener(`click`, function(){
    const zeroButt = document.getElementById(`zero`);
    const oneButt = document.getElementById(`one`);
    const twoButt = document.getElementById(`two`);
    const threeButt = document.getElementById(`three`);
    const fourButt = document.getElementById(`four`);
    const fiveButt = document.getElementById(`five`);
    const sixButt = document.getElementById(`six`);
    const sevenButt = document.getElementById(`seven`);
    const eightButt = document.getElementById(`eight`);
    const nineButt = document.getElementById(`nine`);
    zeroButt.disabled = true;
    oneButt.disabled = true;
    twoButt.disabled = true;
    threeButt.disabled = true;
    fourButt.disabled = true;
    fiveButt.disabled = true;
    sixButt.disabled = true;
    sevenButt.disabled = true;
    eightButt.disabled = true;
    nineButt.disabled = true;

    zeroButtSecond.disabled = false;
    oneButtSecond.disabled = false;
    twoButtSecond.disabled = false;
    threeButtSecond.disabled = false;
    fourButtSecond.disabled = false;
    fiveButtSecond.disabled = false;
    sixButtSecond.disabled = false;
    sevenButtSecond.disabled = false;
    eightButtSecond.disabled = false;
    nineButtSecond.disabled = false;

    addButt.disabled = true;
    subButt.disabled = true;
    mulButt.disabled = false;
    divButt.disabled = true;
    cycleCounter = 4;
    if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == true){
        flMash = 0;
    } 
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == true){
        flMash = parseFloat(document.getElementById(`firstLine--one`).innerHTML);
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--seven`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}${parseFloat(document.getElementById(`firstLine--six`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--seven`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--eight`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}${parseFloat(document.getElementById(`firstLine--six`).innerHTML)}${parseFloat(document.getElementById(`firstLine--seven`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--seven`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--eight`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--nine`).innerHTML)) == false){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}${parseFloat(document.getElementById(`firstLine--six`).innerHTML)}${parseFloat(document.getElementById(`firstLine--seven`).innerHTML)}${parseFloat(document.getElementById(`firstLine--eight`).innerHTML)}`
    }
    console.log(flMash);
    document.getElementById(`zeroSecond`).addEventListener(`click`, function(){
        if (digCountSecond === 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + zero;
            digCountSecond;
        }
        else if (digCountSecond === 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 9){
            digCountSecond = 9;
        }
    });
    
    document.getElementById(`oneSecond`).addEventListener(`click`, function(){
        if (digCountSecond === 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond === 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`twoSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`threeSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`fourSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`fiveSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`sixSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`sevenSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`eightSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`nineSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
});
document.getElementById(`divide`).addEventListener(`click`, function(){
    const zeroButt = document.getElementById(`zero`);
    const oneButt = document.getElementById(`one`);
    const twoButt = document.getElementById(`two`);
    const threeButt = document.getElementById(`three`);
    const fourButt = document.getElementById(`four`);
    const fiveButt = document.getElementById(`five`);
    const sixButt = document.getElementById(`six`);
    const sevenButt = document.getElementById(`seven`);
    const eightButt = document.getElementById(`eight`);
    const nineButt = document.getElementById(`nine`);
    zeroButt.disabled = true;
    oneButt.disabled = true;
    twoButt.disabled = true;
    threeButt.disabled = true;
    fourButt.disabled = true;
    fiveButt.disabled = true;
    sixButt.disabled = true;
    sevenButt.disabled = true;
    eightButt.disabled = true;
    nineButt.disabled = true;

    zeroButtSecond.disabled = false;
    oneButtSecond.disabled = false;
    twoButtSecond.disabled = false;
    threeButtSecond.disabled = false;
    fourButtSecond.disabled = false;
    fiveButtSecond.disabled = false;
    sixButtSecond.disabled = false;
    sevenButtSecond.disabled = false;
    eightButtSecond.disabled = false;
    nineButtSecond.disabled = false;

    addButt.disabled = true;
    subButt.disabled = true;
    mulButt.disabled = true;
    divButt.disabled = false;
    cycleCounter = 5;
    if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == true){
        flMash = 0;
    } 
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == true){
        flMash = parseFloat(document.getElementById(`firstLine--one`).innerHTML);
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--seven`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}${parseFloat(document.getElementById(`firstLine--six`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--seven`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--eight`).innerHTML)) == true){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}${parseFloat(document.getElementById(`firstLine--six`).innerHTML)}${parseFloat(document.getElementById(`firstLine--seven`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`firstLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--seven`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--eight`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`firstLine--nine`).innerHTML)) == false){
        flMash = `${parseFloat(document.getElementById(`firstLine--one`).innerHTML)}${parseFloat(document.getElementById(`firstLine--two`).innerHTML)}${parseFloat(document.getElementById(`firstLine--three`).innerHTML)}${parseFloat(document.getElementById(`firstLine--four`).innerHTML)}${parseFloat(document.getElementById(`firstLine--five`).innerHTML)}${parseFloat(document.getElementById(`firstLine--six`).innerHTML)}${parseFloat(document.getElementById(`firstLine--seven`).innerHTML)}${parseFloat(document.getElementById(`firstLine--eight`).innerHTML)}`
    }
    console.log(flMash);
    document.getElementById(`zeroSecond`).addEventListener(`click`, function(){
        if (digCountSecond === 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + zero;
            digCountSecond;
        }
        else if (digCountSecond === 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + zero;
            digCountSecond++;
        }
        else if (digCountSecond === 9){
            digCountSecond = 9;
        }
    });
    
    document.getElementById(`oneSecond`).addEventListener(`click`, function(){
        if (digCountSecond === 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond === 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + one;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`twoSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + two;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`threeSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + three;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`fourSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + four;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`fiveSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + five;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`sixSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + six;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`sevenSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + seven;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`eightSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + eight;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
    
    document.getElementById(`nineSecond`).addEventListener(`click`, function(){
        if (digCountSecond=== 0){
            document.getElementById(`secondLine--one`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 1){
            document.getElementById(`secondLine--two`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 2){
            document.getElementById(`secondLine--three`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 3){
            document.getElementById(`secondLine--four`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 4){
            document.getElementById(`secondLine--five`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 5){
            document.getElementById(`secondLine--six`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 6){
            document.getElementById(`secondLine--seven`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 7){
            document.getElementById(`secondLine--eight`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 8){
            document.getElementById(`secondLine--nine`).innerHTML = begValue + nine;
            digCountSecond++;
        }
        else if (digCountSecond=== 9){
            digCountSecond= 9;
        }
    });
});

function giveAnswer(){
    if (isNaN(parseFloat(document.getElementById(`secondLine--one`).innerHTML)) == true){
        slMash = 0;
    } 
    else if (isNaN(parseFloat(document.getElementById(`secondLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--two`).innerHTML)) == true){
        slMash = parseFloat(document.getElementById(`secondLine--one`).innerHTML);
    }
    else if (isNaN(parseFloat(document.getElementById(`secondLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--three`).innerHTML)) == true){
        slMash = `${parseFloat(document.getElementById(`secondLine--one`).innerHTML)}${parseFloat(document.getElementById(`secondLine--two`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`secondLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--four`).innerHTML)) == true){
        slMash = `${parseFloat(document.getElementById(`secondLine--one`).innerHTML)}${parseFloat(document.getElementById(`secondLine--two`).innerHTML)}${parseFloat(document.getElementById(`secondLine--three`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`secondLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--five`).innerHTML)) == true){
        slMash = `${parseFloat(document.getElementById(`secondLine--one`).innerHTML)}${parseFloat(document.getElementById(`secondLine--two`).innerHTML)}${parseFloat(document.getElementById(`secondLine--three`).innerHTML)}${parseFloat(document.getElementById(`secondLine--four`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`secondLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--six`).innerHTML)) == true){
        slMash = `${parseFloat(document.getElementById(`secondLine--one`).innerHTML)}${parseFloat(document.getElementById(`secondLine--two`).innerHTML)}${parseFloat(document.getElementById(`secondLine--three`).innerHTML)}${parseFloat(document.getElementById(`secondLine--four`).innerHTML)}${parseFloat(document.getElementById(`secondLine--five`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`secondLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--seven`).innerHTML)) == true){
        slMash = `${parseFloat(document.getElementById(`secondLine--one`).innerHTML)}${parseFloat(document.getElementById(`secondLine--two`).innerHTML)}${parseFloat(document.getElementById(`secondLine--three`).innerHTML)}${parseFloat(document.getElementById(`secondLine--four`).innerHTML)}${parseFloat(document.getElementById(`secondLine--five`).innerHTML)}${parseFloat(document.getElementById(`secondLine--six`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`secondLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--seven`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--eight`).innerHTML)) == true){
        slMash = `${parseFloat(document.getElementById(`secondLine--one`).innerHTML)}${parseFloat(document.getElementById(`secondLine--two`).innerHTML)}${parseFloat(document.getElementById(`secondLine--three`).innerHTML)}${parseFloat(document.getElementById(`secondLine--four`).innerHTML)}${parseFloat(document.getElementById(`secondLine--five`).innerHTML)}${parseFloat(document.getElementById(`secondLine--six`).innerHTML)}${parseFloat(document.getElementById(`secondLine--seven`).innerHTML)}`
    }
    else if (isNaN(parseFloat(document.getElementById(`secondLine--one`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--two`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--three`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--four`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--five`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--six`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--seven`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--eight`).innerHTML)) == false && isNaN(parseFloat(document.getElementById(`secondLine--nine`).innerHTML)) == false){
        slMash = `${parseFloat(document.getElementById(`secondLine--one`).innerHTML)}${parseFloat(document.getElementById(`secondLine--two`).innerHTML)}${parseFloat(document.getElementById(`secondLine--three`).innerHTML)}${parseFloat(document.getElementById(`secondLine--four`).innerHTML)}${parseFloat(document.getElementById(`secondLine--five`).innerHTML)}${parseFloat(document.getElementById(`secondLine--six`).innerHTML)}${parseFloat(document.getElementById(`secondLine--seven`).innerHTML)}${parseFloat(document.getElementById(`secondLine--eight`).innerHTML)}`
    }
    if (cycleCounter === 2){
        finalAnswer = +flMash + +slMash;
        document.getElementById(`output`).innerHTML = finalAnswer;
        console.log(finalAnswer);
    }
    else if (cycleCounter === 3){
        finalAnswer = flMash - slMash;
        document.getElementById(`output`).innerHTML = finalAnswer;
        console.log(finalAnswer);
    }
    else if (cycleCounter === 4){
        finalAnswer = flMash * slMash;
        document.getElementById(`output`).innerHTML = finalAnswer;
        console.log(finalAnswer);
    }
    else if (cycleCounter === 5){
        finalAnswer = flMash / slMash;
        document.getElementById(`output`).innerHTML = finalAnswer;
        console.log(finalAnswer);
    }
}
