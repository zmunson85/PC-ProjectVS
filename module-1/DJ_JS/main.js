/* On hover the specified element changes color */
var changeColor = document.querySelector(".box_element");
changeColor.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = "blue";
})
/* While holding mouse down */
changeColor.addEventListener('mousedown', function (event) {
    event.target.style.backgroundColor = 'red';
})
/* click was held and on release */
changeColor.addEventListener('mouseup', function (event) {
    event.target.style.backgroundColor = 'yellow';
})
/* double left click */
changeColor.addEventListener('dblclick', function (event) {
    event.target.style.backgroundColor = 'green';
})
/* Mouse Wheel */
document.addEventListener('wheel', function (event) {
    changeColor.style.backgroundColor = 'orange';
})

/* keydown event listener, Type first letter of color to see effect on screen IE r or R should be red, Y or y should be yellow, B or b will be blue, O or o will be orange, G or g will be green, keydown value us calculated by its place on the keyboard,
reference for keyboard codes/keyCode> 

https://css-tricks.com/snippets/javascript/javascript-keycodes/


*/

document.addEventListener('keydown', function (event) {
    let keyCode = event.which;
    if (keyCode == 66) {
        changeColor.style.backgroundColor = '#343CF3 ';
    } else if (keyCode == 82) {
        changeColor.style.backgroundColor = '#DA122A ';
    } else if (keyCode == 89) {
        changeColor.style.backgroundColor = '#F7F73A ';
    } else if (keyCode == 71) {
        changeColor.style.backgroundColor = '#1f8a0f';
    } else if (keyCode == 79) {
        changeColor.style.backgroundColor = '##1F8A0F ';
    } else if (keyCode == 73) {
        changeColor.style.backgroundColor = '#9bcad4'
    }
})