//look for author ID in authors objects
//match given ID with author ID 
//return author object with matching ID
function findAuthorById(authors, id) {
  const foundAuthor = authors.find((author) => author.id === id)
  return foundAuthor;
}

//look for book id in books object
//match given id with book id
// return book object
function findBookById(books, id) {
  const foundBook = books.find((book) => book.id === id);
  return foundBook;
}


/** returns false if book is checked out, otherwise true (returned) */ 
function isBookReturned(book) {
  //check if versions are returned (borrows.returned)
  const bookReturned = book.borrows.every((borrow) => (borrow.returned === true));
  return bookReturned;
}

/** returns false if book is checked out, otherwise true (returned) */ 
function isBookNotReturned(book) {
  const bookNotReturned = book.borrows.some((borrow) => (borrow.returned === false));
  return bookNotReturned;
}

//create 2 result variables - checked out, not checked out (returned)
//filter book array by checked out
//push book data to checked out result
//filter book array by returned
//push book data to returned result
//join two arrays into final result variable
//return final result
function partitionBooksByBorrowedStatus(books) {
  borrowedBooks = [];

  const returnedList = books.filter((book) => isBookReturned(book));
  
  const booksNotReturnedList = books.filter((book) => isBookNotReturned(book));
  
  return [booksNotReturnedList, returnedList];
}

//function getBorrowersFor

function getBorrowersForBook(book, accounts) {

  let result = []
  let bookBorrowsReturned = book.borrows.map((borrow) => borrow.returned)
  let bookBorrowsIds = book.borrows.map((borrow) => borrow.id)

  for (let index = 0; index < accounts.length; index++) {
    const account = accounts[index];
    for (id in account);
      if (bookBorrowsIds.includes(account.id)) {
        const index = bookBorrowsIds.indexOf(account.id)
        object = {
          id: bookBorrowsIds[index],
          returned: bookBorrowsReturned[index],
          account: account.picture,
          age: account.age,
          name: {
            first: account.name.first,
            last: account.name.last
          },
          company: account.company,
          email: account.email,
          registered: account.registered
        }
        result.push(object)
      }
  }
  finalResult = result.splice(0,10)
  return finalResult


  
  //access book.borrowss
  //find account objects where the book.borrows.id ==== the accounts.id
  //add borrows array (id, returned) to account object
  //return array of objects
  //filter array to include 10 or less objects
  //return updated array object
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
