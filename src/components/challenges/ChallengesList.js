import React from "react"
import { connect } from "react-redux"
import "moment-timezone"
import ChallengeListItem from "./ChallengeListItem"

function ChallengesList(props) {
  // const challengeItems = props.challenges.map(challenge => (
  //   <ChallengeListItem key={challenge.bookID} props={challenge} />
  // ))

  return (
    <div>
      <h3>Challenges List</h3>
      <strong>{props.filters.text}</strong>
      {props.challenges.map(challenge => {
        return <ChallengeListItem key={challenge.id} {...challenge} />
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    challenges: state.challenges,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ChallengesList)
