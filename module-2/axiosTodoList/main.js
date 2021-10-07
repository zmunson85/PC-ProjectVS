function getData() {
    axios.get("https://api.vschool.io/zacharymunson/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

function listData(data) {
    clearList()

    for (let i = 0; i < data.length; i++) {
        const newLi = document.createElement('li')

        document.getElementById('myList').appendChild(newLi)

        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        newLi.appendChild(h1)

        const img = document.createElement('img')
        img.setAttribute("src", data[i].imgUrl)
        img.setAttribute("width", "535px")
        img.setAttribute("height", "425px")
        newLi.appendChild(img)

        const description = document.createElement('p')
        description.textContent = `Description: ${data[i].description}`
        newLi.appendChild(description)

        const price = document.createElement('p')
        price.setAttribute('id', 'price')
        price.textContent = `${data[i].price} `
        newLi.appendChild(price)

        const completed = document.createElement('input')
        completed.setAttribute("type", "checkbox")
        completed.style.height = '30px'
        completed.style.width = '30px'
        completed.setAttribute("name", "completed")
        completed.setAttribute("id", "completed")

        const completeLabel = document.createElement('label')
        completeLabel.setAttribute('for', 'completed')
        completeLabel.textContent = 'Completed'
        newLi.appendChild(completed)
        newLi.appendChild(completeLabel)

        completed.addEventListener('change', function (e) {
            /* submit will refresh the page, this will prevent that */
            e.preventDefault()

            if (this.checked) {
                axios.put(`https://api.vschool.io/zacharymunson/todo/${data[i]._id}`, { 'completed': true })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                /* Line through after click on completed check box */
                h1.style.textDecoration = 'line-through'
                h1.style.color = 'red'
            } else {
                axios.put(`https://api.vschool.io/zacharymunson/todo/${data[i]._id}`, { 'completed': false })
                    .then(res => getData())
                    .catch(err => console.log(err))
                /* uncheck-(no line through return to initial state) */
                h1.style.textDecoration = 'initial'
            }
        })

        const editItem = document.createElement('button')
        editItem.setAttribute('type', 'button')
        editItem.setAttribute('id', 'editButton')
        editItem.textContent = 'Edit'
        newLi.appendChild(editItem)

        const deleteItem = document.createElement('button')
        deleteItem.setAttribute('type', 'button')
        deleteItem.setAttribute('id', 'deleteButton')
        deleteItem.textContent = 'X'
        deleteItem.style = 'width: 20%; background-color: red;'

        newLi.appendChild(deleteItem)

        deleteItem.addEventListener('click', function (e) {
            e.preventDefault()

            axios.delete(`https://api.vschool.io/zacharymunson/todo/${data[i]._id}`)
                .then(res => getData())
                .catch(err => console.log(err))
        })



        editItem.addEventListener('click', function (e) {
            e.preventDefault()

            const editInfo = document.createElement('form')
            editInfo.setAttribute('name', 'editInfo')
            newLi.appendChild(editInfo)

            const newLabel = document.createElement('label')
            newLabel.textContent = 'Title :'
            const editTitle = document.createElement('input')
            editTitle.setAttribute('name', 'editTitle')
            editTitle.setAttribute('type', 'text')
            editTitle.setAttribute('placeholder', `${data[i].title}`)
            editTitle.value = editTitle.placeholder
            editInfo.appendChild(editTitle)

            const descLabel = document.createElement('label')
            descLabel.textContent = 'Description :'
            const editDesc = document.createElement('input')
            editDesc.setAttribute('name', 'editDesc')
            editDesc.setAttribute('type', 'text')
            editDesc.setAttribute('placeholder', `${data[i].description}`)
            editDesc.value = editDesc.placeholder
            editInfo.appendChild(editDesc)
            /* add Label Dynamically */

            const priceLabel = document.createElement('label')
            priceLabel.textContent = 'Price :'
            const editPrice = document.createElement('input')
            editPrice.setAttribute('name', 'editPrice')
            editPrice.setAttribute('type', 'number')
            editPrice.setAttribute('placeholder', `${data[i].price}`)
            editPrice.value = editPrice.placeholder
            editInfo.appendChild(editPrice)
            /* add Label Dynamically */
            const imgLabel = document.createElement('label')
            imgLabel.textContent = 'Image :'
            const editImg = document.createElement('input')
            editImg.setAttribute('name', 'editImg')
            editImg.setAttribute('type', 'text')
            editImg.setAttribute('placeholder', `${data[i].imgUrl}`)
            editImg.value = editImg.placeholder
            editInfo.appendChild(editImg)

            h1.replaceWith(newLabel, editTitle)
            description.replaceWith(descLabel, editDesc)
            price.replaceWith(priceLabel, editPrice)
            img.replaceWith(imgLabel, editImg)

            const save = document.createElement('button')
            save.setAttribute('name', 'save')
            save.textContent = "Save"
            editItem.replaceWith(save)

            save.addEventListener('click', function (e) {
                e.preventDefault()
                /* Set up edit functionality using the object notation */
                axios.put(`https://api.vschool.io/zacharymunson/todo/${data[i]._id}`, {
                    'title': `${editTitle.value}`,
                    'description': `${editDesc.value}`,
                    'price': `${editPrice.value}`,
                    'imgUrl': `${editImg.value}`
                })
                    .then(res => getData())
                    .catch(err => console.log(err))
            })
        })
    }
}


/* Delete the list items entered by User > myList < */
function clearList() {
    const el = document.getElementById('myList')
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

getData()

const todoForm = document["inputForm"]

todoForm.addEventListener("submit", function (e) {
    e.preventDefault()
    /* class constructor */
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.image.value
    }
    /* User Input/Response Data */
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.image.value = ""
    /* Post User Input */
    axios.post("https://api.vschool.io/zacharymunson/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})