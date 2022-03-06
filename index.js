// document.querySelector('.add-title').onclick = function() {
//     if (document.querySelector('.list-input input').value.length == 0) {
//         alert("Hey! You forgot to add a new title :(")
//     }
// }

//select the tv button element.
const createNewList = document.querySelector('.tv')

//eventListener to initiate function when tv button is clicked.
createNewList.addEventlistener('click', createList()) 

//function to create a new list onclick.
function createList() {

    //create outer div to contain list.
    const newList = document.createElement('div')
    newList.setAttribute("class", "list-container")
   

    //create div for input and button element.
    const inputDiv = document.createElement('div')
    inputTitle.setAttribute("class", "list-input")
    newList.appendChild(inputDiv)


    //create input element.
    const inputTitle = document.createElement('input')
    inputTitle.setAttribute("type", "text")
    inputTitle.setAttribute("placeholder", "Add new title.")
   

    inputDiv.appendChild(inputTitle)

    //create button to submit input.
    const inputBtn = document.createElement('button')
    inputBtn.setAttribute("id", "#add-title")
    inputBtn.setAttribute("value", "Add")

    inputDiv.appendChild(inputBtn)
    
    //append the new list to tv button.
    const element = document.querySelector('.tv')
    element.append(newList)

}


