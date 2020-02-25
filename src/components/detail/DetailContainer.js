import React from "react"
import "../../Detail.css"
import { Container, Row, Col } from "react-bootstrap"
import BookInfo from "./BookInfo"

export default function DetailContainer() {
  return (
    <Container>
      <Row>
        <Col>
          <BookInfo />
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col xs={8}>Challenge List</Col>
        <Col>Static Text</Col>
      </Row>
    </Container>
  )
}
