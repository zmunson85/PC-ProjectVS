const form = document["add-item"];

//dynamic list item
form.addEventListener("submit", function (event) {
    event.preventDefault();

    createItem(form.input);
});

//dynamic input button
function edit(e) {
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.setAttribute("name", "save-button");
    saveButton.setAttribute("class", "saveButton");
    saveButton.setAttribute("onClick", "save(this);");

    const inputNew = document.createElement("input");
    inputNew.setAttribute("name", "editItem");
    inputNew.setAttribute("class", "editItem");
    inputNew.setAttribute("value", (e.parentNode.textContent));
    console.log((e.parentNode.textContent));

    e.parentNode.appendChild(saveButton);
    e.parentNode.appendChild(inputNew);
    e.remove();
}

//this will store the data until you refresh the page, no db to store the list... but will allow for updates on each list item
function save(e) {
    const input = document.getElementsByName("editItem")[0];
    createItem(input);
    e.parentNode.remove();
}

//dynamic edit button
function createEditButton(e) {
    const editButton = document.createElement("button");
    editButton.textContent = "Edit Item";
    editButton.setAttribute("name", "edit-button");
    editButton.setAttribute("class", "editButton");
    editButton.setAttribute("onClick", "edit(this);");
    e.appendChild(editButton);
}

//button created dynamically 
function createDeleteButton(e) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.setAttribute("name", "delete-button");
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.setAttribute("onClick", "this.parentNode.parentNode.removeChild(this.parentNode);");
    e.appendChild(deleteButton);
}

//creates an item using value from the form, clears the form, adds list item with edit and delete buttons
function createItem(e) {
    const item = e.value;
    e.value = "";

    const li = document.createElement("li");
    li.textContent = item;

    createDeleteButton(li);
    createEditButton(li);

    document.getElementsByName("item-list")[0].append(li);
}