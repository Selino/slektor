import React from "react"
import ChallengeForm from "./ChallengeForm"

export default function CreateChalleneg() {
  return (
    <div>
      <h3>Create Challenge</h3>
      <ChallengeForm
        onSubmit={challenge => {
          console.log(challenge)
        }}
      />
    </div>
  )
}
