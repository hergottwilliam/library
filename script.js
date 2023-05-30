const bookShelf = document.querySelector(".bookShelf");
const addBookButton = document.querySelector("#addBookButton");
const addBookFormPopup = document.getElementById("addBookFormPopup");
const addBookForm = document.getElementById("addBookForm");
const cancelFormButton = document.getElementById("cancelFormButton");
const submitFormButton = document.getElementById("submitFormButton");

let myLibrary = [];

function Book(name, author, pages) {
    this.name = name
    this.author = author
    this.pages = pages
}

function addBookToLibrary(event) {
    event.preventDefault();
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("bookAuthor").value;
    let pages = document.getElementById("bookPages").value;
    
    let userBook = new Book(name, author, pages);
    myLibrary.push(userBook);
    closeForm();
    updatePage();
}

function removeBookFromLibrary(event) {
    let i = event.target.id;
    myLibrary.splice(i, 1);
    updatePage();
}

function changeReadStatus(event) {
    let i = event.target;
    if (i.textContent == "Read"){
        i.textContent = "Unread";
    } else {
        i.textContent = "Read";
    }
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
    const deleteBooks = document.querySelectorAll(".bookCard")
    for (let i = 0; i < deleteBooks.length; i++) {
        deleteBooks[i].remove();
    }

    // update page with current library
    for (let i = 0; i < myLibrary.length; i++){
        // create card for each book
        let curBook = document.createElement("div");
        curBook.classList.add(`bookCard`);
        curBook.setAttribute("id", `${i}`);
        bookShelf.appendChild(curBook);

        let name = document.createElement("p")
        name.textContent = myLibrary[i].name;
        curBook.appendChild(name);

        let author = document.createElement("p");
        author.textContent = myLibrary[i].author;
        curBook.appendChild(author);

        let pages = document.createElement("p");
        pages.textContent = myLibrary[i].pages;
        curBook.appendChild(pages);

        let readButton = document.createElement("button");
        readButton.textContent = "Read";
        readButton.classList.add("readButton");
        readButton.setAttribute("id", `${i}`);
        curBook.appendChild(readButton);

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("removeButton");
        removeButton.setAttribute("id", `${i}`);
        curBook.appendChild(removeButton);

        const allReadButtons = document.querySelectorAll(".readButton");
        allReadButtons.forEach((btn) => {
            btn.addEventListener("click", changeReadStatus);
        })

        const allRemoveButtons = document.querySelectorAll(".removeButton");
        allRemoveButtons.forEach((btn) => {
            btn.addEventListener("click", removeBookFromLibrary);
        })
    }
}

addBookButton.addEventListener("click", openForm);
submitFormButton.addEventListener("click", addBookToLibrary);
cancelFormButton.addEventListener("click", closeForm);

/* TODO
    style
        add icon as well
        make so form pops up over the list, not moving any book cards
        grid format for list
        make pretty, it not pretty
        center book cards
        gap between rows varies
    add a checkbox to add book form for read/unread
        add book object attribute (bool) for read status
            based on read status, button starts as read/unread
*/
