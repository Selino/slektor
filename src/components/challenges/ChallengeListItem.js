import React from "react"
import { Card, Badge, Image, Button } from "react-bootstrap"
import { loremIpsum } from "react-lorem-ipsum"
import Dinero from "dinero.js"
import Moment from "react-moment"
import { removeChallenge } from "../../actions/ChallengesActions"
import { connect } from "react-redux"

const ChallengeListItem = props => {
  const {
    id,
    amount,
    bookTitle,
    owner,
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
          Challenger : <strong>{owner}</strong>
          <br />
          Created : &nbsp;
          <strong>
            <Moment unix format='LL'>
              {startDate}
            </Moment>
          </strong>
          <br />
          Ends : &nbsp;
          <strong>
            <Moment unix format='LL'>
              {endDate}
            </Moment>
          </strong>
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
          variant='danger'
          size='sm'
          onClick={() => {
            console.log(id)
            dispatch(removeChallenge({ id }))
          }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default connect()(ChallengeListItem)
