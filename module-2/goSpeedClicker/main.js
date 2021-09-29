const setCount = document.getElementById('count');
setCount.textContent = localStorage.count || 0

let counter = localStorage.count || 0


function clickCount() {
    document.getElementById('count').addEventListener('click', function () {
        counter++
        setCount.textContent = counter;
        localStorage.setItem('count', counter);
        console.log(counter);
    })

}
clickCount();


var clickClock = 10;
var downloadTimer = setInterval(function () {
    if (clickClock <= 0) {
        clearInterval(downloadTimer);
        let endRace = document.getElementById("timer").innerHTML = "Times Up";
        alert(`${endRace}, Race completed with ${counter} clicks`);
        localStorage.removeItem('count');
        counter = 0;
        setCount.textContent = 0;
    } else {
        document.getElementById("timer").innerHTML = clickClock + " seconds remaining";
    }
    clickClock -= 1;
}, 1000);
