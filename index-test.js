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

// setTimeout(() => {

//   test("deleteItem() function should remove an item from the list", () => {
//     const deleteBtn = deleteItem("input[type = 'button']");
//     const movies = document.querySelector('.movie-name')
//     const movietitle = document.querySelectorAll('.movie-title');
//     const result = movies.includes(movietitle[0])
//     const expected = false
//     equal (result, expected);
//     // console.log(deleteItem)
//   })
//   }, 5000);
  
setTimeout(() => {

  test("deleteItem() function should remove an item from the list", () => {
  const movieDiv = document.querySelector('.movie-name')
  const movieTitle = document.querySelector('.movie-title')
  const deleteBtn = document.querySelector('.delete-button-class')
  deleteBtn[0].click
  result = deleteItem(movieDiv.contains(movieTitle[0]), false)
  })
  }, 5000);

//Remove the delete button's class name. (Added in for test purposes)
