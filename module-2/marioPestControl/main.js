let count = 1;
let priceBB = 7;
function addOne() {
    document.getElementById('click').onclick = function () {
        console.log(count, 'Bob-Ombs');
        return console.log(count++ * priceBB);
    }

}
addOne();

let count2 = 1;
let priceCC = 11;
function addCC() {
    document.getElementById('click2').onclick = function () {
        console.log(count2, 'CheapCheep');
        return console.log('Flat Rate ' + count2++ * priceCC + ' coins');

    }
}
addCC();

let count3 = 1;
let priceGoo = 5;
function addGoo() {
    document.getElementById('click3').onclick = function () {
        console.log(count3, 'Goombas');
        return console.log(count3++ * priceGoo);
    }
}
addGoo();