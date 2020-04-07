export const sendBookSearch = (string = "Hobbit") => {
  return (dispatch) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${string}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items.length !== 0) {
          dispatch(
            setBooks({
              books: data.items,
            })
          )
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const setBooks = ({ books: booksArray }) => ({
  type: "SET_BOOKS",
  books: booksArray,
})
