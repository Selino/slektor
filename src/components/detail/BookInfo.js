import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import LoremIpsum from "react-lorem-ipsum"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook } from "@fortawesome/free-solid-svg-icons"

function BookInfo() {
  return (
    <Container>
      <Row>
        <Col style={{ padding: "1rem" }}>
          <FontAwesomeIcon
            icon={faBook}
            style={{ fontSize: "50vh", color: "#ccc" }}
          />
        </Col>
        <Col>
          <LoremIpsum avgWordsPerSentence={10} p={1} />
          <h1>$20</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default BookInfo
