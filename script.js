let myLibrary = [];

const bookShelf = document.querySelector(".bookshelf");
const button = document.querySelector("button");

function Book(name, author) {
    this.name = name
    this.author = author
}

function addBookToLibrary() {
    let name = prompt("Book title:");
    let author = prompt("Author:");
    
    let userBook = new Book(name, author);
    myLibrary.push(userBook);
}

function updatePage(){
    // clear grid first
    const deleteBooks = document.querySelectorAll(".book-card")
    for (let i = 0; i < deleteBooks.length; i++) {
        deleteBooks[i].remove();
    }

    // update page with updated library
    for (let i = 0; i < myLibrary.length; i++){
        // create card for each book
        let curBook = document.createElement("div");
        curBook.classList.add("book-card");
        bookShelf.appendChild(curBook);

        let name = document.createElement("p")
        name.textContent = myLibrary[i].name;
        curBook.appendChild(name);

        let author = document.createElement("p");
        author.textContent = myLibrary[i].author;
        curBook.appendChild(author);
    }
    console.log("page updated");
}

button.addEventListener("click", addBookToLibrary);
button.addEventListener("click", updatePage);
