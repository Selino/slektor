import React from "react"
import { Card } from "react-bootstrap"
import { connect } from "react-redux"

export const BookList = props => {
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
      <h3>Book List</h3>
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
