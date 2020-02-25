import React from "react"
import { Card, Button } from "react-bootstrap"
import { loremIpsum } from "react-lorem-ipsum"

export default function ChallengeCards(props) {
  return (
    <Card style={{ marginBottom: "2rem" }}>
      <Card.Body>
        <Card.Title>Bid ${props.amount}</Card.Title>
        <Card.Text>{loremIpsum()}</Card.Text>
        <Button variant='primary'>Do something</Button>
      </Card.Body>
    </Card>
  )
}
