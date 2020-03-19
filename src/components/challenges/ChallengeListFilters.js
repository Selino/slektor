import React, { useState } from "react"
import { connect } from "react-redux"
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../../actions/filtersactions"
import { DateRangePicker } from "react-dates"

const ChallengeListFilters = props => {
  const [state, setState] = useState({
    calendarFocused: null
  })

  const onDatesChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate))
    props.dispatch(setEndDate(endDate))
  }

  const onFocusChange = calendarFocused => {
    setState(() => ({ calendarFocused }))
  }

  return (
    <div style={{ marginBottom: ".5rem" }}>
      <input
        style={{ verticalAlign: "middle", padding: ".25rem" }}
        placeholder='Filter by title'
        type='text'
        value={props.filters.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value))
        }}
      />
      <select
        value={props.filters.sortBy}
        onChange={e => {
          if (e.target.value === "date") {
            props.dispatch(sortByDate())
          } else if (e.target.value === "amount") {
            props.dispatch(sortByAmount())
          }
        }}
        style={{
          verticalAlign: "middle",
          width: "8rem",
          margin: ".5rem"
        }}
        className='browser-default custom-select'
      >
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>
      <DateRangePicker
        startDate={props.filters.startDate}
        endDate={props.filters.endDate}
        onDatesChange={onDatesChange}
        focusedInput={state.calendarFocused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ChallengeListFilters)
