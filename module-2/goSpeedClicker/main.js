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
