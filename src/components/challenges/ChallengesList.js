import React from "react"
import { Card, Badge, Image } from "react-bootstrap"
import { loremIpsum } from "react-lorem-ipsum"
import { connect } from "react-redux"
import Dinero from "dinero.js"

function ChallengesList(props) {
  const challengeItems = props.challenges.map(challenge => (
    <Card key={challenge.id} style={{ marginBottom: "2rem" }}>
      <Card.Body>
        <Card.Title>{challenge.bookTitle}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          Current Bid :{" "}
          {Dinero({
            amount: challenge.amount,
            currency: "USD"
          }).toFormat("$0,0.00")}
        </Card.Subtitle>
        <Card.Text>
          <Image
            rounded
            src={challenge.bookThumbnail}
            style={{ float: "left", marginRight: "2rem" }}
          />
          <div style={{ marginBottom: "1rem" }}>
            <Badge variant='primary'>{challenge.owner}</Badge>
          </div>
          {loremIpsum()}
        </Card.Text>
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
