let newHeader = document.createElement('h1');
newHeader.setAttribute('class', 'header');
newHeader.setAttribute('id', 'new_header');

let writeName = document.createElement('span');
writeName.setAttribute('class', 'name');
writeName.setAttribute('id', 'nameId');

let addSentence = document.createElement('span');
addSentence.setAttribute('id', 'addSentenceId');

let addMessages = document.querySelector('.messages');
let container = document.querySelector('.main');


document.body.prepend(addSentence);
document.body.prepend(writeName);
document.body.prepend(newHeader);
document.getElementById('new_header').innerHTML = 'JavaScript Made This';
document.getElementById('nameId').innerHTML = 'Zach ';
addSentence.style.textAlign = 'center'
document.getElementById('addSentenceId').innerHTML = ' wrote the JavaScript <br>';

/* target a text node with the same element id by index, such as leftSide[0]=node1, leftSide[1]=node2 */
let leftSide = document.querySelectorAll('.left')[0];
leftSide.innerText = 'Do you like football?';

let rightSide = document.querySelectorAll('.right')[0];
rightSide.innerText = 'I love football, why do you ask?'

let leftSide2 = document.querySelectorAll('.left')[1];
leftSide2.innerText = 'I have tickets to this weeks game, do you want to join me?';

let rightSide2 = document.querySelectorAll('.right')[1];
rightSide2.innerText = 'Say less, I will have my cooler ready for the tailgate party!';
let rightSideMsg = document.querySelectorAll('.right');
let leftSideMsg = document.querySelectorAll('.left');


/* remove nodes from leftSide */
document.getElementById('clear-button').addEventListener('click', function (event) {
    addMessages.removeChild(leftSide)
    addMessages.removeChild(rightSide)
    addMessages.removeChild(leftSide2)
    addMessages.removeChild(rightSide2)
})

/* Change Background Color of messages left and right, add more themes too */
let drpDwn = document.getElementById('theme-drop-down');
let colorRight = document.getElementById('.right');
let colorLeft = document.getElementById('.left');
drpDwn.addEventListener('click', function () {
    let option = drpDwn.options[drpDwn.selectedIndex].value;
    if (option === 'theme-one') {
        for (let i = 0; i < rightSideMsg.length; i++) {
            rightSideMsg[i].style.background = 'lightblue';
            rightSideMsg[i].style.fontSize = 'x-large';

        }
        for (let i = 0; i < leftSideMsg.length; i++) {
            leftSideMsg[i].style.background = "burlywood";
            leftSideMsg[i].style.fontSize = 'x-large';
        }
    }
    else if (option === 'theme-two') {
        for (let i = 0; i < rightSideMsg.length; i++) {
            rightSideMsg[i].style.backgroundColor = 'red';
            rightSideMsg[i].style.fontSize = 'x-large';
        }
        for (let i = 0; i < leftSideMsg.length; i++) {
            leftSideMsg[i].style.backgroundColor = 'black';
            leftSideMsg[i].style.color = 'white';
            leftSideMsg[i].style.fontSize = 'x-large';
        }
    }
    else if (option === 'theme-three') {
        for (let i = 0; i < rightSideMsg.length; i++) {
            rightSideMsg[i].style.backgroundColor = 'orange';
            rightSideMsg[i].style.fontSize = 'x-large';
        }
        for (let i = 0; i < leftSideMsg.length; i++) {
            leftSideMsg[i].style.backgroundColor = 'blue';
            leftSideMsg[i].style.color = 'white';
            leftSideMsg[i].style.fontSize = 'x-large';
        }
    }
    else if (option === 'theme-four') {
        for (let i = 0; i < rightSideMsg.length; i++) {
            rightSideMsg[i].style.backgroundColor = '#5E3A0A ';
            rightSideMsg[i].style.color = 'white';
            rightSideMsg[i].style.fontSize = 'x-large';

        }
        for (let i = 0; i < leftSideMsg.length; i++) {
            leftSideMsg[i].style.backgroundColor = '#EA6E0C ';
            leftSideMsg[i].style.fontSize = 'x-large';

        }
    }
})

// /* Try to use form on browser */
// let messageSide = "left";
// let btn = document.getElementById('newMsg');
// btn.addEventListener("click", function () {
//     let messageContainer = document.getElementsByClassName("messages");
//     let newMessage = document.createElement("div");
//     let content = document.getElementById("input").value;
//     newMessage.innerText = content;
//     if (messageSide == ".left") {
//         newMessage.classList.add(".left");
//         messageSide == ".right";
//         messageContainer.prepend(newMessage);
//     }
//     else if (messageSide == ".right") {
//         newMessage.classList.add(".right");
//         messageSide = ".left";
//         messageContainer.append(newMessage);
//     }
// });