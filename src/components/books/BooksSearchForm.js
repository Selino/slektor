import React, { useState } from "react"
import { Form, Button, InputGroup, FormControl, Alert } from "react-bootstrap"

const BooksSearchForm = props => {
  const [searchText, setSearchText] = useState(null)
  const [error, setError] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (searchText != null && searchText != "") {
      setError("")
      console.log(`submitted: ${searchText}`)
    } else {
      setError("Search cannot be empty!")
    }
  }

  const onSearchTextChange = e => {
    const string = e.target.value
    setSearchText(string)
    searchText != "" ? setError("") : setError("Search cannot be empty!")
  }
  return (
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
  )
}

export default BooksSearchForm
