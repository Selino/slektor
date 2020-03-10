import React from "react"
import { connect } from "react-redux"
import "moment-timezone"
import ChallengeListItem from "./ChallengeListItem"
import { getVisibleItems } from "../../utilities/Utils"
import ChallengeListFilters from "./ChallengeListFilters"

function ChallengesList(props) {
  // const challengeItems = props.challenges.map(challenge => (
  //   <ChallengeListItem key={challenge.bookID} props={challenge} />
  // ))

  return (
    <div>
      <h3>Challenges List</h3>
      <ChallengeListFilters />
      {props.challenges.map(challenge => {
        return <ChallengeListItem key={challenge.id} {...challenge} />
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    challenges: getVisibleItems(state.challenges, state.filters)
  }
}

export default connect(mapStateToProps)(ChallengesList)
