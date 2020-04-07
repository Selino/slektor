import React, { useState } from "react"
import { Form, Button, InputGroup, FormControl, Alert } from "react-bootstrap"
import BookList from "./BookList"
import { sendBookSearch } from "../../actions/booksactions"
import { useSelector, useDispatch } from "react-redux"

const Books = (props) => {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const [searchText, setSearchText] = useState(null)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchText !== null && searchText !== "") {
      setError("")
      dispatch(sendBookSearch(searchText))
    } else {
      setError("Search cannot be empty!")
    }
  }

  const onSearchTextChange = (e) => {
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
            aria-label='Search for book title'
            placeholder='Search for book title'
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
      <BookList Books={books} />
    </div>
  )
}

export default Books
