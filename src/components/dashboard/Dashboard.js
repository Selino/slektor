import React from "react"
import Books from "../books/Books"
import { Row, Col } from "react-bootstrap"
import ChallengesList from "../challenges/ChallengesList"

export default function Dashboard() {
  return (
    <>
      <Row>
        <Col>Test</Col>
        <Col xs={12} md={6}>
          <Books />
        </Col>
        <Col md={4}>
          <ChallengesList />
        </Col>
      </Row>
    </>
  )
}
