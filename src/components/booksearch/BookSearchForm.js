import React from "react"
import { Button } from "react-bootstrap"
export default function BookSearchForm(props) {
  const handleSubmit = e => {
    e.preventDefault()
    console.log("test")
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='search-form'
      style={{ marginBottom: "1rem" }}
    >
      <input
        type='text'
        placeholder='Enter title'
        name='Search'
        style={{ width: "60%" }}
      />
      <Button variant='primary' type='Submit' size='sm'>
        Search
      </Button>
    </form>
  )
}
