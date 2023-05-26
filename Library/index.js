// Book collection
let collection = [];

// Book creation using constructor
function Book(title, author, pages, isRead) {
    title: title
    author: author
    pages: pages
    isRead: isRead
}


// Insert Book into collection array
function addBookToCollection(book) {
    collection.push(book);
}

let mainCollection = document.getElementById("main-collection")

// Adding books in collection into HTML
function displayBookInGrid(collection) {
    mainCollection.textContent = ""

    for (let books in collection) {
        let div = document.createElement("div")
        let divTitle = document.createElement("p")
        let divAuthor = document.createElement("p")
        let divPages = document.createElement("p")
        let bookTitle = document.getElementsByClassName("book")
        div.classList.add("book")
        divTitle.classList.add("title")
        divAuthor.classList.add("author")
        divPages.classList.add("pages")
        mainCollection.append(div)

        bookTitle[books].append(divTitle)
        divTitle.append("Title: " + collection[books].title)
        bookTitle[books].append(divAuthor)
        divAuthor.append("Author: " + collection[books].author)
        bookTitle[books].append(divPages)
        divPages.append("Pages: " + collection[books].pages)
        // bookTitle[books].append(collection[books].title)

        // div.append("Title: " + collection[books].title)
        // div.append("Author: " + collection[books].author)
        // div.append("Pages: " + collection[books].page)

        // console.log(collection[books].title)
        // addBookDetailsToDiv()
    }
}

// function addBookDetailsToDiv() {
//     let mainCollectionBooks = document.getElementsByClassName("book")

//     for (let books in mainCollectionBooks){
//         console.log(books)
//     }
// }

// Initialise sample books
let principles = Object.create(Book)
let coders = Object.create(Book)
let educated = Object.create(Book)

principles.title = "The Principles of Object-Oriented JavaScript"
principles.author = "Nicholas C. Zakas"
principles.pages = 120
principles.isRead = false

coders.title = "Coders: The Making of a New Tribe and the Remaking of the World"
coders.author = "Clive Thompson"
coders.pages = 448
coders.isRead = false

educated.title = "Educated"
educated.author = "Tara Westover"
educated.pages = 352
educated.isRead = true

addBookToCollection(principles)
addBookToCollection(coders)
addBookToCollection(educated)

// Request user to enter details of new book through prompt
function getNewBook(){
    let newTitle = prompt("Please enter title")
    let newAuthor = prompt("Who's the author?")
    let newPages = prompt("How many pages?")
    let newBookRead = prompt("Read yet?")

    let newBook = Object.create(Book)
    newBook.title = newTitle
    newBook.author = newAuthor
    newBook.page = newPages
    newBook.isRead = newBookRead

    addBookToCollection(newBook)
}

let addBook = document.querySelector(".new-book")
let popup = document.querySelector(".popup")
addBook.addEventListener("click", () => popup.classList.add("active"))

let closeBtn = document.querySelector(".close-btn")
closeBtn.addEventListener("click", () => popup.classList.remove("active"))

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form)
    const bookObject = Object.fromEntries(formData)

    console.log(bookObject)
    collection.push(bookObject)
    popup.classList.remove("active")
    displayBookInGrid(collection)
})