const setCount = document.getElementById('count');
setCount.textContent = localStorage.count || 0

let counter = localStorage.count || 0

function clickCount() {
    document.addEventListener('click', function () {
        counter++
        setCount.textContent = counter;
        localStorage.setItem('count', counter);
        console.log(counter);
    })
}
clickCount();

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
