import React, { useState } from "react"
import ChallengeForm from "./ChallengeForm"
import { connect } from "react-redux"
import { createChallenge } from "../../actions/challengesactions"

const CreateChallenge = (props) => {
  const { bookID, bookTitle, bookThumbnail } = props.location.state
  return (
    <div>
      <h3>Create Challenge</h3>
      <ChallengeForm
        bookID={bookID}
        bookTitle={bookTitle}
        bookThumbnail={bookThumbnail}
        onSubmit={(challenge) => {
          props.dispatch(createChallenge(challenge))
          props.history.push("/dashboard")
        }}
      />
    </div>
  )
}

export default connect()(CreateChallenge)
