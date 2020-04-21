import React from "react"
import { Card } from "react-bootstrap"
import "./dashboard.sass"
import { getVisibleItems } from "../../utilities/Utils"

export default function MostLucrative(props) {
  const highestItem = getVisibleItems(props.Challenges, {
    sortBy: "amount",
    text: "",
  })
  return (
    <Card className='stat-card'>
      <Card.Body>
        <Card.Title>
          <strong>{highestItem[0].bookTitle}</strong>
        </Card.Title>
        <Card.Subtitle>Most Lucrative</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}
