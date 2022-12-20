function findAccountById(accounts, id) {
  found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  sortedAccounts = accounts.sort((a, b) => (a.name.last < b.name.last ? -1 : 1));
  return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  let sumOfBorrows = 0;

  for (let i = 0; i < books.length; i++) {
    const indivBook = books[i];
    for (let j = 0; j < indivBook.borrows.length; j++) {
    const bookDetails = indivBook.borrows[j];
      if (bookDetails.id === account.id) {
        sumOfBorrows ++;
      }
    }
  }
  return sumOfBorrows
}

function getBooksPossessedByAccount(account, books, authors) {
//create result variable
//iterate through books array
//iterate through books.borrows array
//compare book.borrows.id to account.id
//books.borrows.retrun === false
//if both are true = push book to a new array
//nest the author array in the book array - compare author of the book to the authors object
//return result variable  

let result = [];
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    for (let j = 0; j < book.borrows.length; j++) {
      let bookBorrowsDetails = book.borrows[j];
      if (bookBorrowsDetails.returned === false && account.id === bookBorrowsDetails.id) {
          authorObject = authors.find((author) => author.id === book.authorId)
          result.push(
            {accountId: account.id,
            id: book.id, 
            title: book.title,
            genre: book.genre,  
            authorId: book.authorId,
            author: {
              id: authorObject.id,
              name: {
                  first: authorObject.name.first,
                  last: authorObject.name.last
                }
            },
            borrows: book.borrows
          })
      }
    }
  }
  return result
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
