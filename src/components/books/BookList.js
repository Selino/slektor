import React from "react"
import { Card, Button, Image } from "react-bootstrap"
import "./books.sass"
import { Link } from "react-router-dom"

function BookList(props) {
  const bookItems = props.Books.map((book) => (
    <Card key={book.id}>
      <Card.Body>
        <Link
          to={{
            pathname: "/create",
            state: {
              bookID: book.id,
              bookTitle: book.volumeInfo.title,
              bookThumbnail:
                book.volumeInfo.imageLinks !== undefined
                  ? book.volumeInfo.imageLinks.smallThumbnail
                  : "",
            },
          }}
        >
          <Button
            className='btnBooksCreateChallenge'
            variant='outline-secondary'
            size='sm'
          >
            Create Challenge
          </Button>
        </Link>
        {book.volumeInfo.imageLinks !== undefined && (
          <Image
            rounded
            className='book-thumbnail-lg'
            alt={book.volumeInfo.title}
            src={book.volumeInfo.imageLinks.smallThumbnail}
          />
        )}
        <p className='book-title'>{book.volumeInfo.title}</p>
        <p className='book-authors'>
          {!book.volumeInfo.authors
            ? ""
            : book.volumeInfo.authors.map((author) => author)}
        </p>
        <p>{book.volumeInfo.description}</p>
      </Card.Body>
    </Card>
  ))

  return <div className='book-list scrolling'>{bookItems}</div>
}

export default BookList
