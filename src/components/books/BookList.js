import React from "react"
import { Card } from "react-bootstrap"
import "./books.sass"

const BookList = props => {
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

  return <div className='book-list'>{bookItems}</div>
}

export default BookList
