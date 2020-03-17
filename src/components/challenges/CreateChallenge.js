import React from "react"
import ChallengeForm from "./ChallengeForm"
import { connect } from "react-redux"
import { createChallenge } from "../../actions/ChallengesActions"

const CreateChallenge = props => {
  return (
    <div>
      <h3>Create Challenge</h3>
      <ChallengeForm
        onSubmit={challenge => {
          props.dispatch(createChallenge(challenge))
          props.history.push("/challenges")
        }}
      />
    </div>
  )
}

export default connect()(CreateChallenge)
