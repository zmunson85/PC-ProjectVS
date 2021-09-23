let form = document["miniCalculator"];

const addResult = form.querySelector('#addition').querySelector('#addResult');
console.log(addResult)
addResult.addEventListener('click', function (event) {
    event.preventDefault();
    let num1 = form.num1.value
    let num2 = form.num2.value
    let addSum = Number(num1) + Number(num2)
    let li = document.getElementById('add');
    console.log(li)
    li.textContent = `${num1}` + ' + ' + `${num2}` + ' = ' + `${addSum}`;
    console.log(addSum);
})
const subResult = form.querySelector('#subtraction').querySelector('#subResult');
console.log(subResult)
subResult.addEventListener('click', function (event) {
    event.preventDefault();
    let num3 = form.num3.value
    let num4 = form.num4.value
    let subSum = Number(num3) - Number(num4)
    let li = document.getElementById('subtract');
    console.log(li)
    li.textContent = `${num3}` + ' - ' + `${num4}` + ' = ' + `${subSum}`;
    console.log(subSum);
})
const multiResult = form.querySelector('#multiplication').querySelector('#multiResult')
console.log(multiResult);
multiResult.addEventListener('click', function (event) {
    event.preventDefault();
    let num5 = form.num5.value
    let num6 = form.num6.value
    let mulSum = Number(num5) * Number(num6)
    let li = document.getElementById('multiply');
    console.log(li);
    li.textContent = `${num5}` + ' * ' + `${num6}` + ' = ' + `${mulSum}`;
    console.log(mulSum);
})
