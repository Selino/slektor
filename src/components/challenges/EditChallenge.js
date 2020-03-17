import React from "react"
import ChallengeForm from "./ChallengeForm"
import { connect } from "react-redux"
import { updateChallenge } from "../../actions/ChallengesActions"
import { Button } from "react-bootstrap"
import { removeChallenge } from "../../actions/ChallengesActions"

const EditChallenge = props => {
  return (
    <div>
      <ChallengeForm
        challenge={props.challenge}
        onSubmit={challenge => {
          props.dispatch(updateChallenge(props.challenge.id, challenge))
          props.history.push("/challenges")
        }}
        props={props}
      />
      <Button
        style={{ marginTop: ".5rem" }}
        variant='danger'
        size='sm'
        onClick={() => {
          props.dispatch(removeChallenge({ id: props.challenge.id }))
        }}
      >
        Delete
      </Button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    challenge: state.challenges.find(challenge => {
      return challenge.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditChallenge)
