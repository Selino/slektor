import React from "react"
import { Card } from "react-bootstrap"
import { connect } from "react-redux"
import "./books.sass"
import BookSearchForm from "./BookSearchForm"

export const BookList = props => {
  const bookItems = props.books.map(book => (
    <Card key={book.id}>
      <Card.Body>
        {book.volumeInfo.imageLinks !== undefined && (
          <img
            className='book-thumbnail'
            alt={book.volumeInfo.title}
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
    <div className='book-list'>
      <h3>Book List</h3>
      <BookSearchForm />
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
