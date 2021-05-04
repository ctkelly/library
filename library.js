// For objects, what are the rules for semicolon and comma usage?

// Example #1. Following the example from The Odin Project. The below works...
// function Book() {
//   // ... but what is the point of creating this constructor and having it empty? LibraryBook won't inherit anything from it.
// }

// Book.prototype.info = function() {
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
// }

// function LibraryBook(title, author, pages, read) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.read = read
// }

// LibraryBook.prototype = Object.create(Book.prototype)

// const book1 = new LibraryBook("Star Trek", "Gene Roddenberry", 250, "already read")

// console.log(book1.title); // Star Trek
// console.log(book1.info()); // correctly returns the sentence from info()


// Example #2. Why doesn't this work? Why is LibraryBook not inheriting the stuff inside Book?
// function Book(title, author, pages, read) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.read = read
//   this.color = "blue" // this line is here for experimental purposes only
// }

// Book.prototype.info = function() {
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
// }

// function LibraryBook() {
//   this.series = 8 // line is here for experimental purposes only
// }

// LibraryBook.prototype = Object.create(Book.prototype)

// const book1 = new LibraryBook("Star Trek", "Gene Roddenberry", 250, "already read")
// console.log(book1.series); // 8
// console.log(book1.title); // undefined
// console.log(book1.info()); // undefined by undefined, undefined pages, undefined
// console.log(book1.color); // undefined
// console.log(Book.color);  // undefined
// console.log(LibraryBook.color);  //undefined


// Example #3. This works when using call() to reference Book within LibraryBook.
// function Book(title, author, pages, read) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.read = read
//   this.color = "blue"
// }

// Book.prototype.info = function() {
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
// }

// function LibraryBook(title, author, pages, read) {
//   Book.call(this, title, author, pages, read)
//   this.series = 8  // line is here for experimental purposes only
// }

// LibraryBook.prototype = Object.create(Book.prototype)

// const book1 = new LibraryBook("Star Trek", "Gene Roddenberry", 250, "already read")
// console.log(book1.series); // 8
// console.log(book1.title); // Star Trek
// console.log(book1.info()); // correctly returns the sentence from info()
// console.log(book1.color); // blue
// console.log(Book.color);  // undefined
// console.log(LibraryBook.color);  //undefined



// Example #4
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.color = "blue"  // this line is here for experimental purposes only
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}

const book1 = new Book("Star Trek", "Gene Roddenberry", 250, "already read");

console.log(book1.title); // Star Trek
console.log(book1.info()); // correctly returns the sentence from info()
console.log(book1.color); // blue
console.log(Book.color);  // undefined

