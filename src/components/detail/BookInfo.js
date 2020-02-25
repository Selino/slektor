import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import LoremIpsum from "react-lorem-ipsum"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook } from "@fortawesome/free-solid-svg-icons"

function BookInfo(props) {
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
          <h2>Book Title</h2>
          <LoremIpsum avgWordsPerSentence={10} p={1} />
          <h1>${props.challengeTotal}</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default BookInfo
