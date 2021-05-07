// 1. User clicks icon to bring up the "add book" form
// 2. User inputs into form the title, author, # of pages, and read/not read
// 3. User clicks to submit form
// 4. The stuff in the form populates a new object based on Book constructor
// 5. Push that new object to myLibrary
// 6. Display the newBook object on the "bookshelf"
// 7. Book on bookshelf should show book info and have two buttons: "mark as read" and "remove"

let addBookBtn = document.querySelector("#add-book-btn");
let submitBtn = document.querySelector("#submit-btn");


addBookBtn.addEventListener("click", displayForm);
submitBtn.addEventListener("click", addBookToLibrary);


function displayForm() {
  let addBookForm = document.getElementById("add-book-form");
  addBookForm.style.display = "block";
}

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
 }

// Clicking on submit after book data has been entered should:
// clear the form
// take the form input values and use them for new Book to create new Book object
// display info from new Book object with "have read" and "remove" buttons

function addBookToLibrary(title, author, pages, read) {
  let newBook =  new Book(title, author, pages, read); // create object from the form's user input
  newBook.name = document.getElementById("title").value;
  newBook.author = document.getElementById("author").value;
  newBook.pages = document.getElementById("pages").value;
  // the radio button inputs here

  myLibrary.push(newBook);
  console.log(newBook);
  console.log(myLibrary);
} 

