import React from "react"
import { Card } from "react-bootstrap"
import "./dashboard.sass"
import { getVisibleItems } from "../../utilities/Utils"

export default function StatThree(props) {
  const highestItem = getVisibleItems(props.Challenges, {
    sortBy: "amount",
    text: "",
  })
  return (
    <Card className='stat-card'>
      <Card.Body>
        <Card.Title>{highestItem[0].bookTitle}</Card.Title>
        <Card.Subtitle>Most Lucrative</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}
