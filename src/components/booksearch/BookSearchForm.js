import React from "react"
import { Button } from "react-bootstrap"
// import { useDispatch } from "react-redux"
// import { v4 as uuidv4 } from "uuid"
// import { createChallenge } from "../../actions/ChallengesActions"
// import { makeDate, makeExpirationDate } from "../../utilities/Utils"
// import { sortBooksByAuthor } from "../../actions/FiltersActions"

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

// store.dispatch(sortChallengesByDateSpecified(123))
