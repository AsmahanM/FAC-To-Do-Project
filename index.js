// document.querySelector('.add-title').onclick = function() {
//     if (document.querySelector('.list-input input').value.length == 0) {
//         alert("Hey! You forgot to add a new title :(")
//     }
// }

//select the tv button element.
const createNewList = document.querySelector('.tv')

//eventListener to initiate function when tv button is clicked.
createNewList.addEventlistener('click', createList) 

//function to create a new list onclick.
function createList() {

    //create new div element.
    const newList = document.createElement('div')
    newList.setAttribute("class", "list-input")
    newList.innerHTML=(inputTitle, inputBtn)

    //create input element.
    const inputTitle = document.createElement('input')
    inputTitle.setAttribute("type", "text")
    inputTitle.setAttribute("placeholder", "Add new title.")

    newList.appendChild(inputTitle)

    //create button to submit input.
    const inputBtn = document.createElement('button')
    inputBtn.setAttribute("id", "#add-title")
    inputBtn.setAttribute("value", "Add")

    newList.appendChild(inputBtn)
    
    //append the new list to tv button.
    const element = document.querySelector('.tv')
    element.append(newList)

}


