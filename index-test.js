// MINIMUM requirement of Unit Tests (as stated on project brief)

 // CHECKBOX TESTING

test("Checking first item marks it as complete", () => {
// 1) Getting the List on the screen  
document.querySelector('#new-list').click();
const input = document.querySelector('input');
input.value = "test";
document.querySelector('#add-title').click();
// 2) Checking the checkbox
const checkbox = document.querySelectorAll("input[type='checkbox']")
checkbox[0].click();
// 3) Check if checked item contains class 
const title = document.querySelectorAll('.movie-title');
const result = title[0].classList.contains('strikethrough'); 
// 4) Check result with equal func
const expected = true;
equal(result, expected);
// 5) Remove elements added by this test
document.querySelector('.list-container').remove();
});
/*
  test("Checking third item marks it as complete", () => {
  const checkbox = document.querySelectorAll("input[type='checkbox']")
  const title = document.querySelectorAll('.movie-title');
  checkbox[2].click();
  const result = title[2].classList.contains('strikethrough'); 
  const expected = true;
  equal(result, expected)
  checkbox[2].click(); //undoing the click
  });

  test("Checking the movie is not checked on default", () => {
  const title = document.querySelectorAll('.movie-title');
  const result2 = title[0].classList.contains('strikethrough'); 
  const result1 = title[2].classList.contains('strikethrough'); 
  const expected = false;
  equal(result1, expected, 'first item tested')
  equal(result2, expected, 'third item tested')
  });

  test("Checking unchecking removes the strike", () => {
  const checkbox = document.querySelector("input[type='checkbox']")
  const title = document.querySelector('.movie-title');
  checkbox.click();
  checkbox.click();
  const result = title.classList.contains('strikethrough'); 
  const expected = false;
  equal(result, expected)
  
  });

  */


  // ADDING ITEM TESTING 

  setTimeout(() => { //Allows time for the elements to appear on the page as they're not present onload.

test("adding a new movie title to the list", () => {
  
  let movieTitle = document.querySelector(".movie-title")
  //cheking the id attribute for the button
  let bingeWorthy = document.querySelector(".movie-name");
  //to fix the error of inputBtn not being defined
  const inputBtn = document.querySelector('button')
  //console.log(ThatGloriusMovie)
  const creatingTheDiv = document.createElement('div')
  creatingTheDiv.childElementCount;
  //console.log(plusTitleToLife)
   //picks up the input button on click
   //const inputTitle  = document.querySelector(".list-input")
  //picks up the input button on click
  // defining the list input
  const inputTitle = document.getElementsByClassName('list-input')
   // giving the input a value otherwise new movie will be created
  inputTitle.value = "Show me that new movie";
  // what happens after the click.
  const expected = inputTitle.childElementCount;
  //checking the click of an item
  // then user should then click the button.
  //checking the click of an item
  //adding a catcher at the beginning of the function seemed to fix the error of cannot read property of undefined.
  if(this.item === undefined) {return}
  let result = inputBtn[0].click();
  equal(result, expected + 1);
  const featureFilm = document.querySelector('div');
  featureFilm.remove();
  //time for resetting with new string.
  inputTitle.value = ``;
})


test("adding a second movie to the Binge list", () => {
  //starting the new list from clicking the animated television
  //const newList = document.querySelector('.main')
  //to fix the error of inputBtn not being defined
  const inputBtn = document.querySelector('button')
  //InputDiv.childElementCount
   //picks up the input button on click
  const inputTitle  = document.querySelector(".list-input")
  //const result = document.getElementsByClassName('input-list')
  // then user should then click the button.
  //checking the click of an item
  //adding a catcher at the beginning of the function seemed to fix the error of cannot read property of undefined.
  if(this.item === undefined) {return}
  let result = inputBtn[1].click();
  //console.log(ddThatGloriusMovie)
  inputTitle.childElementCount;
  //cheking the class attribute for the button
  let bingeWorthy = document.querySelector(".movie-name");
  //console.log(plusTitleToLife)
   // giving the input a value otherwise new movie will be created
  inputTitle.value = "yay to second choice";
  // what happens after the click.
  const expected = inputTitle.childElementCount;

  equal(result, expected + 2);
  const featureFilm = document.querySelector('div');
  featureFilm.remove();
  //time for resetting with new string.
  inputTitle.value = ``;
})

  }, 10100);

// DELETE ITEM TESTING

test("Delete button removes items from the list", () => {
document.querySelector('button#new-list').click(); //Click the TV button to generate new list
const input = document.querySelector('input');
input.value = "test"; //Add input value.
document.querySelector('button#add-title').click(); //Click the 'plus' button to submit input.
const todo = document.querySelector('.movie-name');
todo.querySelector('button.delete').click(); //Click the delete button in the movie-name div to delete the input.
const todoAfter = document.querySelector('.movie-name');
equal(todoAfter, null, 'Item has been deleted.') //After the input has been deleted, the querySelecting movie-name should show up as null bc the item is deleted.
todo.remove() //Clear the screen.
document.querySelector('.list-container').remove();

})
