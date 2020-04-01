export const sendBookSearch = (booksArray = []) => ({
  type: "SEND_BOOK_SEARCH",
  books: booksArray
})
