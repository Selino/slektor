import React, { useState } from "react"
import {
  Form,
  FormLabel,
  Button,
  InputGroup,
  FormControl,
  Alert
} from "react-bootstrap"

const BooksSearchForm = props => {
  const [searchText, setSearchText] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    console.log("submitted")
  }

  const onSearchTextChange = e => {
    const string = e.target.value
    setSearchText({ searchText: string })
    console.log(string)
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
    </Form>
  )
}

export default BooksSearchForm
