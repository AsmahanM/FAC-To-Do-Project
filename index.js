//select the tv button element.
//create eventListener to initiate function when tv button is clicked.
document.querySelector("#new-list").addEventListener("click", createList)

//function to create a new list onclick.
function createList() {

    //create outer div to contain list.
    const newList = document.createElement('div')
    newList.classList.add("list-container")
   

    //create inner div for input and button element.
    const inputDiv = document.createElement('div')
    inputDiv.classList.add("list-input")
    
    newList.appendChild(inputDiv)
    

    //create input element.
    const inputTitle = document.createElement('input')
    inputTitle.type="text"
    inputTitle.placeholder="Add new title."
    inputTitle.classList.add("list-input")
   
    inputDiv.appendChild(inputTitle)


    //create button to submit input.
    const inputBtn = document.createElement('button')
    inputBtn.id="add-title"
    inputBtn.innerHTML="Add"
    inputBtn.classList.add("list-input")

    inputDiv.appendChild(inputBtn)
    

    //append the new list to tv button.
    const element = document.querySelector('.main')
    element.appendChild(newList)

}
