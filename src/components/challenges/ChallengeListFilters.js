import React from "react"
import { connect } from "react-redux"
import {
  setTextFilter,
  sortByDate,
  sortByAmount
} from "../../actions/FiltersActions"

const ChallengeListFilters = props => {
  return (
    <div style={{ marginBottom: ".5rem" }}>
      <input
        style={{ verticalAlign: "middle", padding: ".25rem" }}
        placeholder='Search by title'
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
          marginLeft: ".5rem"
        }}
        className='browser-default custom-select'
      >
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ChallengeListFilters)
