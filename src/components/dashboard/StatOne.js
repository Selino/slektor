import React from "react"
import { Card } from "react-bootstrap"
import "./dashboard.sass"

export default function StatOne() {
  return (
    <Card className='stat-card'>
      <Card.Body>
        <Card.Title className='stat-counter'>$48</Card.Title>
        <Card.Text>Active Bids Total</Card.Text>
      </Card.Body>
    </Card>
  )
}
