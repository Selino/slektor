import React, { useState } from "react"
import {
  Form,
  FormLabel,
  Button,
  InputGroup,
  FormControl,
  Alert,
} from "react-bootstrap"
import moment from "moment"
import "react-dates/initialize"
import { SingleDatePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"

function ChallengeForm(props) {
  const [state, setState] = useState({
    bookTitle: props.challenge ? props.challenge.bookTitle : props.bookTitle,
    amount: props.challenge ? props.challenge.amount / 100 : 1,
    bookID: props.challenge ? props.challenge.bookID : props.bookID,
    bookThumbnail: props.challenge
      ? props.challenge.bookThumbnail
      : props.bookThumbnail,
    reader: props.challenge ? props.challenge.reader : "",
    startDate: props.challenge ? props.challenge.startDate : moment(),
    endDate: props.challenge
      ? moment(props.challenge.endDate)
      : moment().endOf("month"),
  })

  const [readers] = useState(["Tommy", "Dick", "Jane"])
  const [calendarFocus, setCalendarFocus] = useState(false)

  // const [myDate, setMyDate] = useState(moment())
  const [error, setError] = useState("")

  const onAmountChange = (e) => {
    const amount = e.target.value
    if (amount.match(/^\d*?$/) && amount <= 100 && amount > 0) {
      setState({ ...state, amount: parseInt(amount, 10) })
    }
  }

  const onReaderChange = (e) => {
    const reader = e.target.value
    if (reader) {
      setState({ ...state, reader })
    }
  }

  const onDateChange = (endDate) => {
    if (endDate) {
      setState({ ...state, endDate })
    }
  }

  const onFocusChange = ({ focused }) => {
    setCalendarFocus(focused)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.amount === "" || state.amount < 1) {
      setError("Amount cannot be empty!")
    } else {
      setError("")
      props.onSubmit({
        owner: "current user",
        reader: state.reader,
        amount: state.amount * 100,
        bookID: state.bookID,
        bookThumbnail: state.bookThumbnail,
        bookTitle: state.bookTitle,
        startDate: state.startDate,
        endDate: state.endDate.valueOf(),
      })
    }
  }

  const readersSelectItems = readers.map((r) => {
    return (
      <option key={r} value={r}>
        {r}
      </option>
    )
  })

  return (
    <div>
      {error && <Alert variant='danger'>{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicTitle'>
          <Form.Control
            onChange={(e) => (state.bookTitle = e.target.value)}
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
          <Form.Control
            value={state.reader}
            onChange={onReaderChange}
            as='select'
          >
            {readersSelectItems}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlSelect1'>
          <FormLabel style={{ marginRight: ".5rem" }}>
            Select end date
          </FormLabel>
          <SingleDatePicker
            date={state.endDate}
            onDateChange={onDateChange}
            focused={calendarFocus}
            onFocusChange={onFocusChange}
            id='2'
            numberOfMonths={1}
          />
        </Form.Group>

        <Button type='submit'>Save</Button>
      </Form>
    </div>
  )
}

export default ChallengeForm
