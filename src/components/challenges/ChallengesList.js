import React from "react"
import { connect } from "react-redux"
import "moment-timezone"
import ChallengeListItem from "./ChallengeListItem"
import { getVisibleItems } from "../../utilities/Utils"
import ChallengeListFilters from "./ChallengeListFilters"
import { Card } from "react-bootstrap"
import ChallengeTotalBids from "./ChallengeTotalBids"

function ChallengesList(props) {
  return (
    <Card style={{ backgroundColor: "#E5E5E5" }}>
      <Card.Body>
        <ChallengeListFilters />
        <Card>
          <Card.Header>
            Challenges
            <div className='challenges-total'>
              Total (<ChallengeTotalBids Challenges={props.challenges} />)
            </div>
          </Card.Header>
          <Card.Body>
            {props.challenges.map((challenge) => {
              return <ChallengeListItem key={challenge.id} {...challenge} />
            })}
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    challenges: getVisibleItems(state.challenges, state.filters),
  }
}

export default connect(mapStateToProps)(ChallengesList)
