import React from "react"
import { Card, Button } from "react-bootstrap"
import { loremIpsum } from "react-lorem-ipsum"
import { connect } from "react-redux"

function ChallengesList(props) {
  const challengeItems = props.challenges.map(challenge => (
    <Card key={challenge.id} style={{ marginBottom: "2rem" }}>
      <Card.Body>
        <Card.Title>Bid ${challenge.amount}</Card.Title>
        <Card.Text>{loremIpsum()}</Card.Text>
        <Button variant='primary'>Do something</Button>
      </Card.Body>
    </Card>
  ))

  return (
    <div>
      <h3>Challenges List</h3>
      {challengeItems}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    challenges: state.challenges
  }
}

export default connect(mapStateToProps)(ChallengesList)
