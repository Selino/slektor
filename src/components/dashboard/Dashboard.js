import React from "react"
import Books from "../books/Books"
import { Container, Row, Col } from "react-bootstrap"
import ChallengesList from "../challenges/ChallengesList"

export default function Dashboard() {
  return (
    <Row>
      <Col xs={12} sm={8}>
        <Books />
      </Col>
      <Col>
        <ChallengesList />
      </Col>
    </Row>
  )
}
