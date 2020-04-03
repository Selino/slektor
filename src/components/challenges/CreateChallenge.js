import React from "react"
import ChallengeForm from "./ChallengeForm"
import { connect } from "react-redux"
import { createChallenge } from "../../actions/challengesactions"
import queryString from "query-string"

const CreateChallenge = props => {
  const locationValues = queryString.parse(props.location.search)
  return (
    <div>
      <h3>Create Challenge</h3>
      <ChallengeForm
        location={locationValues}
        onSubmit={challenge => {
          props.dispatch(createChallenge(challenge))
          props.history.push("/challenges")
        }}
      />
    </div>
  )
}

export default connect()(CreateChallenge)
