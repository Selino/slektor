import React from "react"
// import { useSelector, useDispatch } from "react-redux"
import { Card } from "react-bootstrap"
import BookSearchForm from "./BookSearchForm"
// import { sortBooksByAuthor } from "../../actions/FiltersActions"
import { connect } from "react-redux"

function BookList(props) {
  const bookItems = props.books.map(book => (
    <Card key={book.id} style={{ marginBottom: "1rem" }}>
      <Card.Body>
        {book.volumeInfo.imageLinks != undefined && (
          <img
            style={{ float: "left", margin: "0 1rem 1rem 0" }}
            src={book.volumeInfo.imageLinks.smallThumbnail}
          />
        )}
        <h2>{book.volumeInfo.title}</h2>
        <h4>{book.volumeInfo.authors.map(author => author)}</h4>
        <p>{book.volumeInfo.description}</p>
      </Card.Body>
    </Card>
  ))

  return (
    <div>
      <BookSearchForm />
      {bookItems}
    </div>
  )
}

const ConnectedBookList = connect(state => {
  return {
    sortBy: state.filters.sortBooksBy,
    books: state.books
  }
})(BookList)

export default ConnectedBookList

// const [state, setState] = useState({
//   data: {
//     items: []
//   }
// })

// useEffect(() => {
//   getBookList()
// }, [])

// const getBookList = () =>
//   fetch(
//     "https://www.googleapis.com/books/v1/volumes?q=hobbit&maxResults=40&key=AIzaSyANiQq7pX6TFzAv9wuBa6XlzFsaMuNloc4&fields=items(id,volumeInfo(title,description,authors,imageLinks/smallThumbnail))"
//   )
//     .then(res => res.json())
//     .then(data => setState({ data }))
//     .catch(err => {
//       console.log(err)
//     })
// ))
