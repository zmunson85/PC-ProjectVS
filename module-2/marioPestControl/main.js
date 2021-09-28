function getTotal() {
    let incValueTypeG = 5;
    let incValueTypeB = 7;
    let incValueTypeC = 11;

    return (document.getElementById("G-total").value * incValueTypeG) +
        (document.getElementById("BB-total").value * incValueTypeB) +
        (document.getElementById("CC-total").value * incValueTypeC);
}
console.log(getTotal);
document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault();
    let result = document.getElementById("total").value = 'Your Price is ' + getTotal() + " Coins"
    console.log(result)
    console.log(goomba.gTotal.value)
    console.log(cheapCheep.cTotal.value)
    console.log(bobOmbs.bTotal.value)
})
getTotal();

