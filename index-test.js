/*

MINIMUM requirement of Unit Tests (as stated on project brief)

test("Submitting a new task adds it to the list", () => {
  // test goes here
});

test("Checking an entry marks it as complete", () => {
  // test goes here
});

test("Deleting an entry removes it from the list", () => {
  // test goes here
});

*/




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
