import React from "react"
import ChallengeForm from "./ChallengeForm"
import { connect } from "react-redux"
import { updateChallenge } from "../../actions/ChallengesActions"

const EditChallenge = props => {
  return (
    <ChallengeForm
      challenge={props.challenge}
      onSubmit={challenge => {
        props.dispatch(updateChallenge(props.challenge.id, challenge))
        props.history.push("/challenges")
      }}
      props={props}
    />
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
