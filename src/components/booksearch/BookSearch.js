import React, { useState, useEffect } from "react"
import { Card } from "react-bootstrap"

function BookSearch() {
  const [state, setState] = useState({
    data: {
      items: []
    }
  })

  useEffect(() => {
    getBookList()
  }, [])

  const getBookList = () =>
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=hobbit&maxResults=40&key=AIzaSyANiQq7pX6TFzAv9wuBa6XlzFsaMuNloc4&fields=items(id,volumeInfo(title,description,imageLinks/smallThumbnail))"
    )
      .then(res => res.json())
      .then(data => setState({ data }))
      .catch(err => {
        console.log(err)
      })

  const bookItems = state.data.items.map(book => (
    <Card key={book.id} style={{ marginBottom: "1rem" }}>
      <Card.Body>
        <p>
          {book.volumeInfo.imageLinks != undefined && (
            <img
              style={{ float: "left", margin: "0 1rem 1rem 0" }}
              src={book.volumeInfo.imageLinks.smallThumbnail}
            />
          )}
          <h2>{book.volumeInfo.title}</h2>
        </p>
        <p>{book.volumeInfo.description}</p>
      </Card.Body>
    </Card>
  ))

  return (
    <div>
      <h1>Books</h1>
      <div>{bookItems}</div>
    </div>
  )
}

export default BookSearch
