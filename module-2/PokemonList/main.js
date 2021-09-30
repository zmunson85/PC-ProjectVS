let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.vschool.io/pokemon', true);
xhr.send();

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
        document.body.appendChild(div).style.marginLeft = '45%';
        console.log(`${element.name}`)
    });
}