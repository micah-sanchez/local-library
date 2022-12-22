function getTotalBooksCount(books) {
  const countOfBooks = books.length;
  return countOfBooks;
}

function getTotalAccountsCount(accounts) {
  const countOfAccounts = accounts.length;
  return countOfAccounts;
}

function getBooksBorrowedCount(books) {
  const bookBorrows = books.map((book) => book.borrows);

  let result = [];
  for (let index = 0; index < bookBorrows.length; index++) {
    const book = bookBorrows[index]
    for (let individualBook = 0; individualBook < book.length; individualBook++) {
      result.push(book[individualBook])
    }
  }
  
  let filteredBooks = result.filter((book) => book.returned === false)
  return filteredBooks.length



  // const numberOfBorrowedBooks = borrowsConsolidated.filter((borrow) => borrow.returned === false)



  //console.log(numberOfBorrowedBooks)
}

function getMostCommonGenres(books) {

  const allGenres = books.map((book) => book.genre);

  let resultArray = [];
  const counts = [];
  const consolidatedGenres = [];
  
  
  for (let index = 0; index < allGenres.length; index++) {
    const genre = allGenres[index]
    if (consolidatedGenres.includes(genre)) {
      const found = consolidatedGenres.indexOf(genre);
      counts[found] += 1;
    } 
    else {
      consolidatedGenres.push(genre);
      counts.push(1);
    }
  }

  for (let index = 0; index < consolidatedGenres.length; index++) {
    const name = consolidatedGenres[index];
    const count = counts[index];
    resultArray.push({name: name, count: count})
  }

  sortedGenreCounts = resultArray.sort((first, second) => first.count < second.count ? 1 : -1);
  return sortedGenreCounts.slice(0, 5)

}

function getMostPopularBooks(books) {
  let returnArray = [];
  for (let index = 0; index < books.length; index++) {
    const book = books[index]
    const numberOfBorrows = book.borrows.length;
    returnArray.push({name: book.title, count: numberOfBorrows})
  }

  returnArray.sort((first, second) => first.count < second.count ? 1 : -1);

  const topFive = returnArray.slice(0,5)

  return topFive
}

function getMostPopularAuthors(books, authors) {
  //calculate length of borrows for each book 
//search for author ID in return list 
//if author in return list increment count by length of book
//if not in return list add author name and count
//pair down list to 5 authors
//find author name from author id

  let results = [];
  let authorIds = [];
  

  for (let index = 0; index < books.length; index++) {
    const book = books[index];
    const id = book.authorId
    const authorFullName = authors[id] + " " + authors[id]
    let count = 0;

    if (authorIds.includes(book.authorId)) {
      const bookIndex = authorIds.indexOf(book.authorId)
      results[bookIndex] = {name: id, count: count += book.borrows.length}
    } else {
      results.push({name: id, count: book.borrows.length})
      authorIds.push(book.authorId)
    }
  }

  for (let index = 0; index < results.length; index++) {
    const result = results[index]
    const foundAuthorName = authors.find((author) => author.id === result.name)
    result.name = foundAuthorName.name.first + " " + foundAuthorName.name.last
  }

  results.sort((first, second) => first.count < second.count ? 1 : -1);

  topFive = results.splice(0,5)
  
  return topFive
  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
