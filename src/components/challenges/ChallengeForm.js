import React, { useState } from "react"
import {
  Form,
  FormLabel,
  Button,
  InputGroup,
  FormControl,
  Alert
} from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"
import moment from "moment"
import "react-dates/initialize"
import { SingleDatePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"

function ChallengeForm(props) {
  const [state, setState] = useState({
    bookTitle: "Book Title Gets Passed Into Here Book",
    amount: 5,
    bookId: uuidv4()
  })
  const [readers] = useState(["Tomy", "Dick", "Jane"])
  const [calendarFocus, setCalendarFocus] = useState(false)
  const [myDate, setMyDate] = useState(moment())
  const [error, setError] = useState("")

  const onAmountChange = e => {
    const amount = e.target.value
    if (amount.match(/^\d*?$/) && amount <= 100 && amount > 0) {
      setState({ ...state, amount: parseInt(amount, 10) })
    }
  }

  const readersSelectItems = readers.map(reader => {
    return (
      <option key={reader} value={reader}>
        {reader}
      </option>
    )
  })

  const onDateChange = date => {
    if (date) {
      setMyDate(date)
    }
  }

  const onFocusChange = ({ focused }) => {
    setCalendarFocus(focused)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (state.amount === "" || state.amount < 1) {
      setError("Amount cannot be empty!")
    } else {
      setError("")
      props.onSubmit({
        amount: state.amount,
        bookId: state.bookId,
        bookTitle: state.bookTitle
      })
    }
  }

  return (
    <div>
      {error && <Alert variant='danger'>{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicTitle'>
          <Form.Control
            onChange={e => (state.bookTitle = e.target.value)}
            defaultValue={state.bookTitle}
            type='text'
            placeholder={state.bookTitle}
            disabled
          />
        </Form.Group>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type='number'
            onChange={onAmountChange}
            aria-label='Amount (to the nearest dollar)'
            //   placeholder={state.amount}
            value={state.amount}
            autoFocus
          />
          <InputGroup.Append>
            <InputGroup.Text>$100 max</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <FormLabel>Select reader</FormLabel>
          <Form.Control as='select'>{readersSelectItems}</Form.Control>
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlSelect1'>
          <FormLabel style={{ marginRight: ".5rem" }}>
            Select end date
          </FormLabel>
          <SingleDatePicker
            date={myDate}
            onDateChange={onDateChange}
            focused={calendarFocus}
            onFocusChange={onFocusChange}
            id='2'
            numberOfMonths={1}
          />
        </Form.Group>

        <Button type='submit'>Create Challenge</Button>
      </Form>
    </div>
  )
}

export default ChallengeForm
