const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const age = document.getElementById("age-number")
const gender = document.getElementById("gender")
const destination = document.getElementById("location")
const diet = document.getElementById("diet")

const submit = document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault()
    alert(`Name: ${firstName.value} ${lastName.value} \nAge: ${age.value} \nGender: ${gender.value} \nDestination: ${destination.value} \nDietary Restrictions: ${diet.value}`)
})