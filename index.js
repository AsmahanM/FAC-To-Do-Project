// document.querySelector('.add-title').onclick = function() {
//     if (document.querySelector('.list-input input').value.length == 0) {
//         alert("Hey! You forgot to add a new title :(")
//     }
// }

const createNewList = document.querySelector('.new-list')

// createNewList.forEach(newList => {

createNewList.addEventlistener('click', createList())

function createList() {

    //create new div element
    const newList = document.createElement('div')
    newList.setAttribute("class", "list-input")

    //create input element
    const inputTitle = document.createElement('input')
    inputTitle.setAttribute("type", "text")
    inputTitle.setAttribute("placeholder", "Add new title.")

    newList.appendChild(inputTitle)

    //create button to submit input
    const inputBtn = document.createElement('button')
    inputBtn.setAttribute("id", "add-title")
    inputBtn.setAttribute("value", "Add")

    newList.appendChild(inputBtn)

    //append to tv button
    const element = document.getElementById('new-list');
    element.appendChild(newList)
   
}
