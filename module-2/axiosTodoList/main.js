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

        const h2 = document.createElement('h2')
        h2.textContent = data[i].title
        newLi.appendChild(h2)

        const img = document.createElement('img')
        img.setAttribute("src", data[i].imgUrl)
        img.setAttribute("width", "450")
        img.setAttribute("height", "325")
        newLi.appendChild(img)

        const description = document.createElement('p')
        description.textContent = `Description: ${data[i].description}`
        newLi.appendChild(description)

        const price = document.createElement('p')
        price.setAttribute('id', 'price')
        price.textContent = `${data[i].price}`
        newLi.appendChild(price)

        const completed = document.createElement('input')
        completed.setAttribute("type", "checkbox")
        completed.setAttribute("name", "completed")
        completed.setAttribute("id", "completed")

        const completeLabel = document.createElement('label')
        completeLabel.setAttribute('for', 'completed')
        completeLabel.textContent = 'Completed'
        newLi.appendChild(completed)
        newLi.appendChild(completeLabel)

        completed.addEventListener('change', function (e) {
            e.preventDefault()

            if (this.checked) {
                axios.put(`https://api.vschool.io/zacharymunson/todo/${data[i]._id}`, { 'completed': true })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                h2.style.textDecoration = 'line-through'
            } else {
                axios.put(`https://api.vschool.io/zacharymunson/todo/${data[i]._id}`, { 'completed': false })
                    .then(res => getData())
                    .catch(err => console.log(err))
                h2.style.textDecoration = 'initial'
            }
        })

        const deleteItem = document.createElement('button')
        deleteItem.setAttribute('type', 'button')
        deleteItem.setAttribute('id', 'deleteButton')
        deleteItem.textContent = 'Delete'
        newLi.appendChild(deleteItem)

        deleteItem.addEventListener('click', function (e) {
            e.preventDefault()

            axios.delete(`https://api.vschool.io/zacharymunson/todo/${data[i]._id}`)
                .then(res => getData())
                .catch(err => console.log(err))
        })

        const editItem = document.createElement('button')
        editItem.setAttribute('type', 'button')
        editItem.setAttribute('id', 'editButton')
        editItem.textContent = 'Edit'
        newLi.appendChild(editItem)

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

            const editDesc = document.createElement('input')
            editDesc.setAttribute('name', 'editDesc')
            editDesc.setAttribute('type', 'text')
            editDesc.setAttribute('placeholder', `${data[i].description}`)
            editDesc.value = editDesc.placeholder
            editInfo.appendChild(editDesc)

            const editPrice = document.createElement('input')
            editPrice.setAttribute('name', 'editPrice')
            editPrice.setAttribute('type', 'number')
            editPrice.setAttribute('placeholder', `${data[i].price}`)
            editPrice.value = editPrice.placeholder
            editInfo.appendChild(editPrice)

            const editImg = document.createElement('input')
            editImg.setAttribute('name', 'editImg')
            editImg.setAttribute('type', 'text')
            editImg.setAttribute('placeholder', `${data[i].imgUrl}`)
            editImg.value = editImg.placeholder
            editInfo.appendChild(editImg)

            h2.replaceWith(newLabel, editTitle)
            description.replaceWith(editDesc)
            price.replaceWith(editPrice)
            img.replaceWith(editImg)

            const submitEdit = document.createElement('button')
            submitEdit.setAttribute('name', 'submitEdit')
            submitEdit.textContent = "Submit edit"
            editItem.replaceWith(submitEdit)

            submitEdit.addEventListener('click', function (e) {
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