import React from "react"
import { Card } from "react-bootstrap"
import "./dashboard.sass"

export default function StatThree() {
  return (
    <Card className='stat-card'>
      <Card.Body>
        <Card.Title className='stat-counter'>6</Card.Title>
        <Card.Text>Title of the Stat</Card.Text>
      </Card.Body>
    </Card>
  )
}
