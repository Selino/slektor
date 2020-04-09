import React from "react"
import { Card } from "react-bootstrap"
import "./dashboard.sass"

export default function StatTwo(props) {
  return (
    <Card className='stat-card'>
      <Card.Body>
        <Card.Title className='stat-counter'>
          {props.Challenges.length}
        </Card.Title>
        <Card.Subtitle>Total Active</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}
