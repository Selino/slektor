export const sortBooksByAuthor = () => ({
  type: "SORT_BOOKS_BY_AUTHOR"
})

export const sortBooksByTitle = () => ({
  type: "SORT_BOOKS_BY_TITLE"
})

export const searchString = ({ string = "" } = {}) => ({
  type: "SEARCH_STRING",
  searchString: {
    string
  }
})
