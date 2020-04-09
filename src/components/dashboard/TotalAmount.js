import React from "react"
import { Card } from "react-bootstrap"
import "./dashboard.sass"
import Dinero from "dinero.js"

export default function TotalAmount(props) {
  const getAmounts = props.Challenges.map((challenge) => {
    return challenge.amount
  })
  const totalAmount = getAmounts.reduce((a, b) => a + b, 0)
  return (
    <Card className='stat-card'>
      <Card.Body>
        <Card.Title className='stat-counter'>
          {Dinero({
            amount: totalAmount,
            currency: "USD",
          }).toFormat("$0,0")}
        </Card.Title>
        <Card.Subtitle>Total Amount</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}
