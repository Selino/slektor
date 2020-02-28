import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Card } from "react-bootstrap"
import BookSearchForm from "./BookSearchForm"
import axios from "axios"

function BookSearch() {
  const [state, setState] = useState({
    data: {
      items: []
    }
  })

  const getBookList = () =>
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=hobbit&maxResults=40&key=AIzaSyANiQq7pX6TFzAv9wuBa6XlzFsaMuNloc4&fields=items(id,volumeInfo(title,description,authors,imageLinks/smallThumbnail))"
    )
      .then(res => res.json())
      .then(data => setState({ data }))
      .catch(err => {
        console.log(err)
      })

  const bookItems = state.data.items.map(book => (
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

  useEffect(() => {
    getBookList()
  }, [])

  return (
    <div>
      <BookSearchForm />
      <div>{bookItems}</div>
    </div>
  )
}

export default BookSearch
