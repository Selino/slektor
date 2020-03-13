import React, { useState } from "react"
import {
  Form,
  FormLabel,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"
import moment from "moment"
import "react-dates/initialize"
import { SingleDatePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"

function ChallengeForm() {
  const [state, setState] = useState({
    bookTitle: "Book Title Gets Passed Into Here Book",
    amount: 5,
    bookId: uuidv4()
  })
  const [readers] = useState(["Tomy", "Dick", "Jane"])
  const [calendarFocus, setCalendarFocus] = useState(false)
  const [myDate, setMyDate] = useState(moment())

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
    setMyDate(date)
  }

  const onFocusChange = ({ focused }) => {
    setCalendarFocus(focused)
  }

  const handleSubmit = () => {
    console.log(state)
  }

  return (
    <div>
      <Form>
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
          <FormLabel>Select end date</FormLabel>
          <SingleDatePicker
            date={myDate}
            onDateChange={onDateChange}
            focused={calendarFocus}
            onFocusChange={onFocusChange}
            id='2'
            numberOfMonths={1}
          />
        </Form.Group>

        <Button onClick={handleSubmit}>Create Challenge</Button>
      </Form>
    </div>
  )
}

export default ChallengeForm

// <Form.Group controlId='formBasicReader'>
// <FormLabel>Reader</FormLabel>
// <Form.Control as='select'>
//   <option>1</option>
//   <option>2</option>
//   <option>3</option>
// </Form.Control>
// </Form.Group>

// <Form.Group controlId='formBasicNote'>
// <Form.Label>Example textarea</Form.Label>
// <Form.Control as='textarea' rows='3' />
// </Form.Group>
