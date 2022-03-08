/* The vw unit is the relative unit which is 1% of the width of the 
viewport and the viewport will stay the size of the browser window. 
Although this may differ per different browser capabilities. */

/* This function should fix the background issue where it exceeds 100vw. */

const placeVw = () => {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
  
  placeVw();
  window.addEventListener('resize', placeVw);


//select the tv button element.
//create eventListener to initiate function when tv button is clicked.
document.querySelector("#new-list").addEventListener("click", createList)

//function to create a new list onclick.
function createList() {

    //create outer div to contain list.
    const newList = document.createElement('div')
    newList.classList.add("list-container")
   
    //create div for title
    const headingContainer = document.createElement('div')
    headingContainer.classList.add("listHeadingContainer")
    newList.appendChild(headingContainer)

    //creating heading h1 and append to title div
    const headingTitle = document.createElement('h2')
    headingTitle.classList.add("listCategoryTitle")
    headingTitle.innerHTML="Title"
    headingContainer.appendChild(headingTitle)

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



  