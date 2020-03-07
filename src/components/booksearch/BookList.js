import React from "react"
import { Card } from "react-bootstrap"
import BookSearchForm from "./BookSearchForm"
import { connect } from "react-redux"
// import { sortBooksByAuthor } from "../../actions/FiltersActions"

function BookList(props) {
  const bookItems = props.books.map(book => (
    <Card key={book.id} style={{ marginBottom: "1rem" }}>
      <Card.Body>
        {book.volumeInfo.imageLinks !== undefined && (
          <img
            alt={book.volumeInfo.title}
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
      <BookSearchForm props={props} />
      {bookItems}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    books: state.books,
    filters: {
      sortBooksBy: state.filters.sortBooksBy
    }
  }
}

export default connect(mapStateToProps)(BookList)

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
