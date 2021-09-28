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




document.getElementById('clear').addEventListener('click', function (e) {
    localStorage.removeItem('count');
    counter = 0;
    setCount.textContent = 0;
    localStorage.clear();

})
var clickClock = 10;
var downloadTimer = setInterval(function () {
    if (clickClock <= 0) {
        clearInterval(downloadTimer);
        let endRace = document.getElementById("timer").innerHTML = "Times Up";
        console.log(endRace);
        localStorage.removeItem('count');
        counter = 0;
        setCount.textContent = 0;
    } else {
        document.getElementById("timer").innerHTML = clickClock + " seconds remaining";
    }
    clickClock -= 1;
}, 1000);
// const setCount2 = document.getElementById('count2');
// setCount2.textContent = sessionStorage.count || 0

// let counter2 = sessionStorage.count || 0

// function clickCount2() {
//     document.addEventListener('click', function () {
//         counter2++
//         setCount.textContent = counter;
//         sessionStorage.setItem('count2', counter2);
//         console.log(counter);
//     })
// }
// clickCount2();
