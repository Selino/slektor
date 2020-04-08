import React, { useState, useEffect } from "react"
import { Form, Button, InputGroup, FormControl, Alert } from "react-bootstrap"
import BookList from "./BookList"
import { sendBookSearch } from "../../actions/booksactions"
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

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

  useEffect(() => {}, [])

  return (
    <div>
      <Form id='book-search-form' onSubmit={handleSubmit}>
        <InputGroup className='mb-3'>
          <FormControl
            type='text'
            onChange={onSearchTextChange}
            aria-label='Search for book title'
            placeholder='Search for book title'
            defaultValue={searchText}
            name='Search'
            style={{ width: "60%" }}
          />
          <InputGroup.Append>
            <Button variant='secondary' type='Submit' id='search-button'>
              <FontAwesomeIcon icon={faSearch} />
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
