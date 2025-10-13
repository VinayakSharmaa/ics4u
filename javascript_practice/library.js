import books from './books.js';
import promptSync from 'prompt-sync';
const prompt = promptSync()


menu()

function addBook() {
    const title = prompt("Enter the new book's title: ")
    const author = prompt("Enter the new book's author: ")
    const year = prompt("Enter the new book's publishing year: ")
    const isAvailable = true;
    const newBook = {
        title: title,
        author: author,
        year: year,
        isAvailable: isAvailable
    }

    books.push(newBook)

    menu()

}



function listAvailableBooks() {
    console.log("Here are the titles of all available books: ")

    for(let key in books){
        
        if(books[key].isAvailable === true){
            console.log(books[key].title)
        }

    }
    menu()

}

function borrowBook() {
    const borrowedTitle = prompt("Enter the book you want to borrow's title: ")
    for(let key in books){
        if(books[key].title === borrowedTitle){
            if(books[key].isAvailable === true){
                console.log("Success! You have borrowed the book.")
                books[key].isAvailable = false
                menu()
            }
            console.log("That book is not available at the moment.")
            menu()
        }
        
        
    }
    console.log("There is no book with that name!")
    menu()
}

function returnBook() {
    const returnedTitle = prompt("Enter the book you want to return's title: ")
    for(let key in books){
        if(books[key].title === returnedTitle){
            if(books[key].isAvailable === false){
                console.log("Success! You have returned the book.")
                books[key].isAvailable = true
                menu()
            }
            console.log("That book is already available.")
            menu()
        }
        
        
    }
    console.log("There is no book with that name!")
    menu()

}

function listBookByAuthor() {
    const author = prompt("Enter the books you want to search for by the author's name: ")
    for(let key in books){
        if(books[key].author === author){
            console.log(books[key].title)
            menu()
        }
        
        
    }
    console.log("There is no books written by that author!")
    menu()
}

function findBooksBeforeYear() {
    const yearsBeforeBook = prompt("Enter the year you'd like to find books published BEFORE: ")
    for(let key in books){
        if(books[key].year < yearsBeforeBook){
            console.log(books[key].title)
            menu()
        }
        
        
    }
    menu()
}

function removeBook() {
    const removedTitle = prompt("Enter the book you'd like to remove from the library: ")
    for(let key in books){
        if(books[key].title === removedTitle){
            books.pop(books[key])
            console.log("You have successfully removed that book.")
            menu()
            }
            
        }
        
        
    }
    console.log("There is no book with that name!")
    menu()



function exitProgram(){
    return
}
function menu() {
    console.log("Welcome to the library! Please select one of the provided options.")
    console.log("1. Add a book")
    console.log("2. List available books")
    console.log("3. Borrow a book")
    console.log("4. List books by author")
    console.log("5. Find books before a year")
    console.log("6. Remove a book")
    console.log("7. Exit the program")

    const menuChoice = parseFloat(prompt("What choice would you like to pick?: "))

    if(menuChoice === 1){
        addBook()
    }
    if(menuChoice === 2){
        listAvailableBooks()
    }
    if(menuChoice === 3){
        borrowBook()
    }
    if(menuChoice === 4){
        listBookByAuthor()
    }
    if(menuChoice === 5){
        findBooksBeforeYear()
    }
    if(menuChoice === 6){
        removeBook()
    }
    if(menuChoice === 7){
        exitProgram()
    }


}

