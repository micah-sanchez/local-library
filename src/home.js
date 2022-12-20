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
  for (let i = 0; i < bookBorrows.length; i++) {
    const book = bookBorrows[i]
    for (let j = 0; j < book.length; j++) {
      result.push(book[j])
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
  
  
  for (let i = 0; i < allGenres.length; i++) {
    const genre = allGenres[i]
    if (consolidatedGenres.includes(genre)) {
      const found = consolidatedGenres.indexOf(genre);
      counts[found] += 1;
    } 
    else {
      consolidatedGenres.push(genre);
      counts.push(1);
    }
  }

  for (let i = 0; i < consolidatedGenres.length; i++) {
    const name = consolidatedGenres[i];
    const count = counts[i];
    resultArray.push({name: name, count: count})
  }

  sortedGenreCounts = resultArray.sort((a, b) => a.count < b.count ? 1 : -1);
  return sortedGenreCounts.slice(0, 5)

}

function getMostPopularBooks(books) {
  let returnArray = [];
  for (let i = 0; i < books.length; i++) {
    const book = books[i]
    const numberOfBorrows = book.borrows.length;
    returnArray.push({name: book.title, count: numberOfBorrows})
  }

  returnArray.sort((a, b) => a.count < b.count ? 1 : -1);

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
  

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const id = book.authorId
    const authorFullName = authors[id] + " " + authors[id]
    let count = 0;

    if (authorIds.includes(book.authorId)) {
      const index = authorIds.indexOf(book.authorId)
      results[index] = {name: id, count: count += book.borrows.length}
    } else {
      results.push({name: id, count: book.borrows.length})
      authorIds.push(book.authorId)
    }
  }

  for (let i = 0; i < results.length; i++) {
    const result = results[i]
    const foundAuthorName = authors.find((author) => author.id === result.name)
    result.name = foundAuthorName.name.first + " " + foundAuthorName.name.last
  }

  results.sort((a, b) => a.count < b.count ? 1 : -1);

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
