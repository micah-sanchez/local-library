function findAccountById(accounts, id) {
  found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  sortedAccounts = accounts.sort((first, second) => (first.name.last < second.name.last ? -1 : 1));
  return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  
  let sumOfBorrows = 0;

  books.forEach((book) => {
    sumOfBorrows += book.borrows.reduce((accumulator, borrow) => {
      if (borrow.id === account.id) {
        return accumulator+=1;
      }
      return accumulator;
    }, 0);
  });

  // for (let index = 0; index < books.length; index++) {
  //   const indivBook = books[index];
  //   for (let borrow = 0; borrow < indivBook.borrows.length; borrow++) {
  //   const bookDetails = indivBook.borrows[borrow]; 
  //     if (bookDetails.id === account.id) {
  //       sumOfBorrows ++;
  //     }
  //   }
  // }
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
  for (let index = 0; index < books.length; index++) {
    let book = books[index];
    for (let borrow = 0; borrow < book.borrows.length; borrow++) {
      let bookBorrowsDetails = book.borrows[borrow];
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
