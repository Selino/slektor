import React, { useState } from "react"
import { connect } from "react-redux"
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../actions/filtersactions"
import { DateRangePicker } from "react-dates"
import { Row, Col, Form, FormControl } from "react-bootstrap"

const ChallengeListFilters = (props) => {
  const [state, setState] = useState({
    calendarFocused: null,
  })

  const onDatesChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate))
    props.dispatch(setEndDate(endDate))
  }

  const onFocusChange = (calendarFocused) => {
    setState(() => ({ calendarFocused }))
  }

  return (
    <Form>
      <Row>
        <Col xs={12} sm={6}>
          <Form.Group>
            <FormControl
              style={{
                padding: ".25rem",
              }}
              placeholder='Filter by title'
              type='text'
              value={props.filters.text}
              onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
              }}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Control
              as='select'
              value={props.filters.sortBy}
              onChange={(e) => {
                if (e.target.value === "date") {
                  props.dispatch(sortByDate())
                } else if (e.target.value === "amount") {
                  props.dispatch(sortByAmount())
                }
              }}
              className='browser-default custom-select'
            >
              <option value='date'>Date</option>
              <option value='amount'>Amount</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} sm={12}>
          <Form.Group>
            <DateRangePicker
              startDate={props.filters.startDate}
              endDate={props.filters.endDate}
              onDatesChange={onDatesChange}
              focusedInput={state.calendarFocused}
              onFocusChange={onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
              startDateId='1'
              endDateId='2'
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
}

export default connect(mapStateToProps)(ChallengeListFilters)
