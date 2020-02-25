import React from "react"
import "../../Detail.css"

export default function DetailContainer() {
  return (
    <Container>
      <Row>
        <Col className='scaffold detail-area'></Col>
      </Row>
      <Row>
        <Col className='scaffold challenge-area'>1 of 3</Col>
        <Col className='scaffold static-text-area'>2 of 2</Col>
      </Row>
    </Container>
  )
}
