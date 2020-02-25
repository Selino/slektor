import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import BookInfo from "./BookInfo"
import ChallengeCards from "../challenges/ChallengeCards"
import StaticText from "./StaticText"

export default function DetailContainer() {
  return (
    <Container>
      <Row>
        <Col>
          <BookInfo challengeTotal={25.34} />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginBottom: "1rem" }}>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <ChallengeCards amount={5} />
          <ChallengeCards amount={10} />
        </Col>
        <Col>
          <StaticText />
        </Col>
      </Row>
    </Container>
  )
}
