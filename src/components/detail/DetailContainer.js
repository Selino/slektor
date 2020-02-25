import React from "react"
import "../../Detail.css"
import { Container, Row, Col } from "react-bootstrap"

//test

export default function DetailContainer() {
  return (
    <Container>
      <Row>
        <Col className='scaffold detail-area'>USBN Details</Col>
      </Row>
      <Row>
        <Col className='scaffold challenge-area' xs={8}>
          Challenge List
        </Col>
        <Col className='scaffold static-text-area'>Static Text</Col>
      </Row>
    </Container>
  )
}
