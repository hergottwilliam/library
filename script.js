let myLibrary = [];

const bookShelf = document.querySelector(".bookShelf");
const addBookButton = document.querySelector("#addBookButton");
const addBookFormPopup = document.getElementById("addBookFormPopup");
const cancelFormButton = document.getElementById("cancelFormButton");
const submitFormButton = document.getElementById("submitFormButton")

function Book(name, author) {
    this.name = name
    this.author = author
}

// close window via event listener, not really in this function
// then update the page again, also not really in this function (could be if you change styling here..)

function addBookToLibrary(event) {
    event.preventDefault();
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("bookAuthor").value;
    
    let userBook = new Book(name, author);
    myLibrary.push(userBook);
    closeForm();
    updatePage();
    console.log(`${name}, ${author}`);
}

function openForm() {
    addBookFormPopup.style.display = "block";
}

function closeForm() {
    addBookFormPopup.style.display = "none";
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
    console.log("page updated");
}

addBookButton.addEventListener("click", openForm);

submitFormButton.addEventListener("click", addBookToLibrary);

cancelFormButton.addEventListener("click", closeForm);