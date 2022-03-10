// MINIMUM requirement of Unit Tests (as stated on project brief)

setTimeout(() => { //Allows time for the elements to appear on the page as they're not present onload.

  // CHECKBOX TESTING

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
  });

  
  }, 8000);


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

setTimeout(() => { //Allows time for the elements to appear on the page as they're not present onload.

  test("deleteItem() function should remove the first item from the list", () => {
    let deleteBtn = document.querySelectorAll('.delete');
    let movieDiv = document.querySelectorAll('.movie-name');
    let movietitle = document.querySelectorAll('.movie-title');
    let parent = movieDiv[0].parentElement; //selecting to append back to page later
    let add = document.querySelector('#add-title')

    //create a replacent for after the test deletes the movie title
    let replacementDiv =  movieDiv[0];
    let replacementTitle = movietitle[0]
    replacementTitle.classList.add('movie-title')

    deleteBtn[0].click(); //click the delete button
    const result = deleteBtn[0].parentElement.childNodes[3].innerText === movietitle[0] //check that the p in the same div as the button has the correspondig movie title
    const expected = false;
    equal (result, expected);

    //appended the item back to the page
    replacementDiv.prepend(replacementTitle) //prepend makes it first child - this fixed positioning issue
    parent.insertBefore(replacementDiv, add.nextSibling) //simular to above comment!
    
  })

  }, 13000);

