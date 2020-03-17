import React from "react"
import { Card, Badge, Image, Button } from "react-bootstrap"
import { loremIpsum } from "react-lorem-ipsum"
import Dinero from "dinero.js"
import moment from "moment"
import { Link } from "react-router-dom"

const ChallengeListItem = props => {
  const {
    id,
    amount,
    bookTitle,
    reader,
    startDate,
    endDate,
    bookThumbnail
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
        <Link to={`/edit/${id}`}>
          <Button variant='secondary' size='' style={{ width: "100%" }}>
            Edit
          </Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ChallengeListItem
