import React from "react"
import Books from "../books/Books"
import { Row, Col } from "react-bootstrap"
import ChallengesList from "../challenges/ChallengesList"

export default function Dashboard() {
  return (
    <Row>
      <Col xs={12} md={6}>
        <Books />
      </Col>
      <Col>
        <ChallengesList />
      </Col>
    </Row>
  )
}
