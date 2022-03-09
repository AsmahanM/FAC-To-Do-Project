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