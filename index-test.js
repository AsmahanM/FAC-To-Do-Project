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

