import React from "react"
import { Card } from "react-bootstrap"
import "./dashboard.sass"

export default function StatTwo() {
  return (
    <Card className='stat-card'>
      <Card.Body>
        <Card.Title className='stat-counter'>12</Card.Title>
        <Card.Text>Title of the Stat</Card.Text>
      </Card.Body>
    </Card>
  )
}
