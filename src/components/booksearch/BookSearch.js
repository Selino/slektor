import React, { useState, useEffect } from "react"

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
      "https://www.googleapis.com/books/v1/volumes?q=hobbit&maxResults=40&key=AIzaSyANiQq7pX6TFzAv9wuBa6XlzFsaMuNloc4&fields=items(id,volumeInfo(title,imageLinks/smallThumbnail))"
    )
      .then(res => res.json())
      .then(data => setState({ data }))
      .catch(err => {
        console.log(err)
      })

  const bookItems = state.data.items.map(book => (
    <li key={book.id}>
      <p>
        {book.volumeInfo.imageLinks != undefined && (
          <img src={book.volumeInfo.imageLinks.smallThumbnail} />
        )}
      </p>
      <p>{book.volumeInfo.title}</p>
    </li>
  ))

  return (
    <div>
      <h1>Books</h1>
      <ol>{bookItems}</ol>
    </div>
  )
}

export default BookSearch
