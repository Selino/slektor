import React, { useState } from "react"
import { Form, Button, InputGroup, FormControl, Alert } from "react-bootstrap"
import BookList from "./BookList"
import { connect } from "react-redux"

const Books = props => {
  const [books, setBooks] = useState(props.books)
  const [searchText, setSearchText] = useState(null)
  const [error, setError] = useState("")

  const goGetIt = string => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${string}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.items.length !== 0) {
          console.log(data.items)
          setBooks(data.items)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (searchText !== null && searchText !== "") {
      setError("")
      goGetIt(searchText)
    } else {
      setError("Search cannot be empty!")
    }
  }

  const onSearchTextChange = e => {
    const string = e.target.value
    setSearchText(string)
    searchText !== "" ? setError("") : setError("Search cannot be empty!")
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup className='mb-3'>
          <FormControl
            type='text'
            onChange={onSearchTextChange}
            aria-label='Enter search string'
            placeholder='Enter search string'
            defaultValue={searchText}
            name='Search'
            style={{ width: "60%" }}
            autoFocus
          />
          <InputGroup.Append>
            <Button variant='primary' type='Submit' size='sm'>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
        {error && <Alert variant='danger'>{error}</Alert>}
      </Form>
      <h3>Book List</h3>
      <BookList books={books} />
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

export default connect(mapStateToProps)(Books)
