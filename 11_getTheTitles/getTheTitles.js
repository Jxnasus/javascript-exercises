const getTheTitles = function(books) {
    let bookList = []
    for (let i = 0; i < books.length; i++) {
    bookList.push(books[i].title)
    }
    return bookList
};

// Do not edit below this line
module.exports = getTheTitles;
