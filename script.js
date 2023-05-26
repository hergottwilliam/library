let myLibrary = [];

const bookShelf = document.querySelector(".bookShelf");
const addBookButton = document.querySelector("#addBookButton");
const addBookFormPopup = document.getElementById("addBookFormPopup");
const addBookForm = document.getElementById("addBookForm");
const cancelFormButton = document.getElementById("cancelFormButton");
const submitFormButton = document.getElementById("submitFormButton");

function Book(name, author) {
    this.name = name
    this.author = author
}

// reset form inputs after submit or cancel
function addBookToLibrary(event) {
    event.preventDefault();
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("bookAuthor").value;
    
    let userBook = new Book(name, author);
    myLibrary.push(userBook);
    closeForm();
    updatePage();
}

function openForm() {
    addBookFormPopup.style.display = "block";
}

function closeForm() {
    addBookFormPopup.style.display = "none";
    addBookForm.reset();

}

function updatePage(){
    // clear grid first
    const deleteBooks = document.querySelectorAll(".book-card")
    for (let i = 0; i < deleteBooks.length; i++) {
        deleteBooks[i].remove();
    }

    // update page with current library
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
}

addBookButton.addEventListener("click", openForm);

submitFormButton.addEventListener("click", addBookToLibrary);

cancelFormButton.addEventListener("click", closeForm);