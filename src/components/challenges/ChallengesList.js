import React from "react"
import { connect } from "react-redux"
import "moment-timezone"
import ChallengeListItem from "./ChallengeListItem"
import { getVisibleItems } from "../../utilities/Utils"
import ChallengeListFilters from "./ChallengeListFilters"
import { Card } from "react-bootstrap"

function ChallengesList(props) {
  return (
    <div>
      <ChallengeListFilters />
      <Card style={{ marginBottom: "2rem" }}>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          {props.challenges.map((challenge) => {
            return <ChallengeListItem key={challenge.id} {...challenge} />
          })}
        </Card.Body>
      </Card>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    challenges: getVisibleItems(state.challenges, state.filters),
  }
}

export default connect(mapStateToProps)(ChallengesList)
