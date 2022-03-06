//select the tv button element.
const createNewList = document.querySelector('.tv')

//create eventListener to initiate function when tv button is clicked.
createNewList.addEventlistener('onclick', createList()) 

//function to create a new list onclick.
function createList() {

    //create outer div to contain list.
    const newList = document.createElement('div')
    // newList.setAttribute("class", "list-container")
    newList.class="list-container"
   

    //create inner div for input and button element.
    const inputDiv = document.createElement('div')
    // inputTitle.setAttribute("class", "list-input")
    inputDiv.classList.add("list-input")
    newList.appendChild(inputDiv)
    

    //create input element.
    const inputTitle = document.createElement('input')
    inputTitle.type="text"
    inputTitle.placeholder="Add new title."
    inputTitle.classList.add("list-input")
    // inputTitle.setAttribute("type", "text")
    // inputTitle.setAttribute("placeholder", "Add new title.")
   

    inputDiv.appendChild(inputTitle)

    //create button to submit input.
    const inputBtn = document.createElement('button')
    inputBtn.id="add-title"
    inputBtn.innerHTML="Add"
    inputBtn.classList.add("list-input")
    // inputBtn.setAttribute("id", "#add-title")
    // inputBtn.setAttribute("value", "Add")

    inputDiv.appendChild(inputBtn)
    
    //append the new list to tv button.
    const element = document.querySelector('.tv')
    element.appendChild(newList)

}


