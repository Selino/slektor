import React from "react"
import { Image, Button, Container, Row, Col } from "react-bootstrap"
import Dinero from "dinero.js"
import moment from "moment"
import { Link } from "react-router-dom"
import "./challenges.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"

const ChallengeListItem = (props) => {
  const { id, amount, bookTitle, endDate, bookThumbnail } = props
  return (
    <Container className='challenge-item'>
      <Row>
        <Col>
          <Image rounded className='book-thumbnail' src={bookThumbnail} />
        </Col>
        <Col sm={4}>
          <p className='book-title'>{bookTitle}</p>
          <p className='date'>{moment(endDate).format("MMMM Do YYYY")}</p>
        </Col>
        <Col>
          <p className='amount'>
            {Dinero({
              amount: amount,
              currency: "USD",
            }).toFormat("$0,0.00")}
          </p>
        </Col>

        <Col>
          <Link to={`/edit/${id}`}>
            <Button size='sm' variant='outline-secondary'>
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default ChallengeListItem
