import React from "react"
import { Card, Badge, Image, Button } from "react-bootstrap"
import { loremIpsum } from "react-lorem-ipsum"
import Dinero from "dinero.js"
import moment from "moment"
import { removeChallenge } from "../../actions/ChallengesActions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const ChallengeListItem = props => {
  const {
    id,
    amount,
    bookTitle,
    reader,
    startDate,
    endDate,
    bookThumbnail,
    dispatch
  } = props
  return (
    <Card key={id} style={{ marginBottom: "2rem" }}>
      <Card.Body>
        <Card.Title>
          <Badge variant='success' className='float-right'>
            Current Bid :{" "}
            {Dinero({
              amount: amount,
              currency: "USD"
            }).toFormat("$0,0.00")}
          </Badge>
          {bookTitle}
        </Card.Title>
        <div style={{ marginBottom: "1rem" }}>
          Reader : <strong>{reader}</strong>
          <br />
          Created : &nbsp;
          <strong>{moment(startDate).format("MMMM Do YYYY")}</strong>
          <br />
          Ends : &nbsp;
          <strong>{moment(endDate).format("MMMM Do YYYY")}</strong>
        </div>
        <Card.Text>
          <Image
            rounded
            src={bookThumbnail}
            style={{ float: "left", marginRight: "2rem" }}
          />
          {loremIpsum()}
        </Card.Text>
        <Button
          style={{ marginRight: ".5rem" }}
          variant='danger'
          size='sm'
          onClick={() => {
            console.log(id)
            dispatch(removeChallenge({ id }))
          }}
        >
          Delete
        </Button>
        <Link to={`/edit/${id}`}>
          <Button variant='secondary' size='sm'>
            Edit
          </Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default connect()(ChallengeListItem)
