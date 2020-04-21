import React from "react"
import ChallengeForm from "./ChallengeForm"
import { connect } from "react-redux"
import {
  updateChallenge,
  removeChallenge,
} from "../../actions/challengesactions"
import { Button } from "react-bootstrap"

const EditChallenge = (props) => {
  return (
    <div>
      <ChallengeForm
        challenge={props.challenge}
        onSubmit={(challenge) => {
          props.dispatch(updateChallenge(props.challenge.id, challenge))
          props.history.push("/dashboard")
        }}
        props={props}
      />
      <Button
        style={{ marginTop: ".5rem" }}
        variant='danger'
        size='sm'
        onClick={() => {
          props.dispatch(removeChallenge({ id: props.challenge.id }))
          props.history.push("/dashboard")
        }}
      >
        Delete
      </Button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    challenge: state.challenges.find((challenge) => {
      return challenge.id === props.match.params.id
    }),
  }
}

export default connect(mapStateToProps)(EditChallenge)
