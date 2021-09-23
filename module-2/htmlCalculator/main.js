let form = document["miniCalculator"];
/* Addition section 1 */
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let num1 = form.num1.value
    let num2 = form.num2.value
    let sum = Number(num1) + Number(num2)
    console.log(sum);
})

/* Subtraction Section 2 */
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let num3 = form.num3.value
    let num4 = form.num4.value
    let subSum = num3 -= num4
    console.log(subSum);
})

/* Multiplication Section 3 */

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let num5 = form.num5.value
    let num6 = form.num6.value
    let mulSum = num5 *= num6
    console.log(mulSum);
})

/* Create Result li */
function addElement() {
    const newLi = document.createElement('li');
    const addResult = document.createTextNode(sum);
    newLi.appendChild(addResult);
    const results = document.getElementsByClassName('results');
    document.body.insertBefore(newLi, results)

}
