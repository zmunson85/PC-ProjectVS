let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.vschool.io/pokemon', true);
xhr.send();

// xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon 1', true);
// xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let sourceData = xhr.responseText;
        let apiData = JSON.parse(sourceData);
        displayNames(apiData.objects[0].pokemon)
    }
}

function displayNames(arr) {
    arr.forEach(element => {
        let div = document.createElement('div');
        div.textContent = element.name;
        document.body.appendChild(div).style.cssText = `
            position: relative;
            left: 45%;
            border: solid black 2px;
            width: 200px;
            height: 200px;
        `;
        console.log(`${element.name}`)
    });
}

