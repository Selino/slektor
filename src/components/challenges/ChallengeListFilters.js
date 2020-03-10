import React from "react"
import { connect } from "react-redux"
import { setTextFilter } from "../../actions/FiltersActions"

const ChallengeListFilters = props => {
  return (
    <div>
      <input
        style={{ marginBottom: ".5rem", padding: ".25rem" }}
        placeholder='Search by title'
        type='text'
        value={props.filters.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value))
        }}
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
