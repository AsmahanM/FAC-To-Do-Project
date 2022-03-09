// MINIMUM requirement of Unit Tests (as stated on project brief)

//test("Submitting a new task adds it to the list", () => {
// test goes here
//});

setTimeout(() => {

  test("Checking an entry marks it as complete", () => {
  const checkbox = document.querySelector("input[type='checkbox']")
  const title = document.querySelector('.movie-title');
  checkbox.click();
  const result = title.classList.contains('strikethrough'); 
  const expected = true;
  equal(result, expected)
  checkbox.click(); //undoing the click
  });
  
}, 5000);

//test("Deleting an entry removes it from the list", () => {
// test goes here
//});






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