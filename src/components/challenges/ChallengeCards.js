import React from "react"
import { Card, Button } from "react-bootstrap"
import LoremIpsum from "react-lorem-ipsum"

export default function ChallengeCards() {
  return (
    <Card style={{ marginBottom: "2rem" }}>
      <Card.Body>
        <Card.Title>Bid $5</Card.Title>
        <Card.Text>
          <LoremIpsum />
        </Card.Text>
        <Button variant='primary'>Do something</Button>
      </Card.Body>
    </Card>
  )
}
