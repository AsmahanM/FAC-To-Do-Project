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
    headingContainer.classList.add("listCategoryContainer")
    headingContainer.contentEditable=true
    newList.appendChild(headingContainer)

    //creating heading h1 and append to title div
    const headingTitle = document.createElement('h2')
    headingTitle.classList.add("listCategoryTitle")
    headingTitle.innerHTML="Update your list title 🎥"
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
    inputBtn.innerHTML=`<i class="fas fa-plus"></i>`
    inputBtn.ariaLabel = `Add movie title`
    inputBtn.classList.add("list-input")

    inputDiv.appendChild(inputBtn)
    

    //append the new list to tv button.
    const element = document.querySelector('.main')
    element.appendChild(newList)

    // ********************* adding a title for movie in the list *************************** //

    // adding an event listener to this created inputBtn that is inside the beginning binge list box
inputBtn.addEventListener('click', (e) => {
  
  //get the movie title from the input.

  // once the user enters a new movie name, then make a new
  if(inputTitle.value !== "" && inputTitle.value !== new RegExp("/^\s+$/")) {
  e.preventDefault();
  
  // create a div with a class of movie-name
  const bingeWorthy = document.createElement('div');
  bingeWorthy.classList.add('movie-name');
  //console.log(bingeWorthy);

  // create an input with class new-film
  // const newFeatureFilm = document.createElement('input');
  // newFeatureFilm.classList.add('new-film');
  // newFeatureFilm.value = inputTitle.value;
  // newFeatureFilm.setAttribute('readonly', 'readonly');
  
  // Add movie title to the list
  const movieTitle = document.createElement('p');
  movieTitle.innerHTML = inputTitle.value;
  movieTitle.classList.add('movie-title')
  bingeWorthy.appendChild(movieTitle);
  
  //console.log(newFeatureFilm);
  
  //create done button
  //const doneButton = document.createElement('button');
  //doneButton.innerHTML = `<i class="fas fa-check"></i>`;
  //doneButton.style.color = '#0ed600'
  //doneButton.style.borderColor = '#0ed600'
  const doneButton = document.createElement('input');
  doneButton.type = 'checkbox'
  doneButton.classList.add('checkbox')
  doneButton.ariaLabel = `Check movie title as watched`
  doneButton.addEventListener('click', markDone)
  bingeWorthy.appendChild(doneButton);

  //create delete button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
  deleteButton.style.color = '#ed0014'
  deleteButton.style.borderColor = '#ed0014'
  deleteButton.ariaLabel = `Remove movie title from list`
  deleteButton.addEventListener('click', deleteItem)
  bingeWorthy.appendChild(deleteButton);


  inputDiv.appendChild(bingeWorthy)

// append the bingeWorthy and newFeatureFilm to the inputDiv
// inputDiv.append(bingeWorthy, newFeatureFilm, deleteButton)

// clearing the input title field
//console.log(inputDiv.value = "");
inputTitle.value = ``;

  }

})

}


function deleteItem(e) {
this.parentNode.remove() // removes div with button and movie name!
}

function markDone(e) {
 e.path[1].childNodes[0].classList.toggle('strikethrough');
}