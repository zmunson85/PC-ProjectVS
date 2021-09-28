function getTotal() {
    return (document.getElementById("G-total").value * 5) +
        (document.getElementById("BB-total").value * 7) +
        (document.getElementById("CC-total").value * 11);
}

document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault();
    let result = document.getElementById("total").value = 'Your Price is ' + getTotal() + " Coins"
    console.log(result)
})
getTotal();
