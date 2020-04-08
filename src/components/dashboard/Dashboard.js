import React from "react"
import Books from "../books/Books"
import { Row, Col } from "react-bootstrap"
import ChallengesList from "../challenges/ChallengesList"
import StatOne from "./StatOne"
import StatTwo from "./StatTwo"
import StatThree from "./StatThree"

export default function Dashboard() {
  return (
    <>
      <Row>
        <Col sm={12} lg={2}>
          <StatOne />
          <StatTwo />
          <StatThree />
        </Col>
        <Col sm={12} lg={6}>
          <Books />
        </Col>
        <Col sm={12} lg={4}>
          <ChallengesList />
        </Col>
      </Row>
    </>
  )
}
