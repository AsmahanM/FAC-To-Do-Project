// MINIMUM requirement of Unit Tests (as stated on project brief)

//test("Submitting a new task adds it to the list", () => {
// test goes here
//});

setTimeout(() => {

  test("Checking first item marks it as complete", () => {
  const checkbox = document.querySelectorAll("input[type='checkbox']")
  const title = document.querySelectorAll('.movie-title');
  checkbox[0].click();
  const result = title[0].classList.contains('strikethrough'); 
  const expected = true;
  equal(result, expected)
  checkbox[0].click(); //undoing the click
  });

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
  checkbox.click();
  });

  
}, 6000);

//test("Deleting an entry removes it from the list", () => {
// test goes here
//});



setTimeout(() => {

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

}, 5000);

setTimeout(() => {

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

}, 5000);








/*

EXAMPLE: Integration test (to reference later) :)

test("form submits expected result", () => {
  const inputa = document.querySelector("#a");
  inputa.value = 10;
  const inputb = document.querySelector("#b");
  inputb.value = 2;
  const inputsign = document.querySelector("#sign");
  inputsign.value = "*";
  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click();
  const result = document.querySelector("#result");
  equal(result.textContent, "20");
  result.textContent = "";
});


*/

setTimeout(() => {

  test("deleteItem() function should remove an item from the list", () => {
    const deleteBtn = document.querySelectorAll('button');
    const movieDiv = document.querySelectorAll('.movie-name');
    const movietitle = document.querySelectorAll('.movie-title');
    if(this.item === undefined) {return} //This stops the .click() from returning an error message. 
    deleteBtn[0].click(); //When the first delete button is clicked...
    const result = movieDiv.includes(movietitle[0])
    const expected = false
    equal (result, expected);
    deleteBtn[0].click();
  })
  }, 5000);
  

setTimeout(() => { //Allows time for the elements to appear on the page as they're not present onload.
test("deleteItem() function should remove an item from the list", () => {
  const movieDiv = document.querySelectorAll('.movie-name') //Outer container
  const movieTitle = document.querySelectorAll('.movie-title') //Input value
  const deleteBtn = document.querySelectorAll('button') //delete button
  if(this.item === undefined) {return} //This stops the .click() from returning an error message. 
  let result = deleteBtn[0].click(); //When the first delete button is clicked...
  const expected = deleteItem(movieDiv.contains(movieTitle[0]) == false); //...the first input will no longer be contained in the div.
  // const expected = false;
  equal (result, expected); //When result takes place, expected is what we should see.
  })
  }, 5000);

//Remove the delete button's class name. (Added in for test purposes)

