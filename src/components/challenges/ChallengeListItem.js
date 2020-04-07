import React from "react"
import { Card, Badge, Image, Button } from "react-bootstrap"
import Dinero from "dinero.js"
import moment from "moment"
import { Link } from "react-router-dom"

const ChallengeListItem = (props) => {
  const {
    id,
    amount,
    bookTitle,
    reader,
    startDate,
    endDate,
    bookThumbnail,
  } = props
  return (
    <Card key={id} style={{ marginBottom: "2rem" }}>
      <Card.Body>
        <Card.Title>
          <Badge variant='success' className='float-right'>
            Current Bid :{" "}
            {Dinero({
              amount: amount,
              currency: "USD",
            }).toFormat("$0,0.00")}
          </Badge>
          {bookTitle}
        </Card.Title>
        <div style={{ marginBottom: "1rem" }}>
          Reader : <strong>{reader}</strong>
          <br />
          Starts : &nbsp;
          <strong>{moment(startDate).format("MMMM Do YYYY")}</strong>
          <br />
          Ends : &nbsp;
          <strong>{moment(endDate).format("MMMM Do YYYY")}</strong>
        </div>
        <Card.Text>
          <Image
            rounded
            src={bookThumbnail}
            style={{ float: "left", marginRight: "2rem", marginBottom: "1rem" }}
          />
          Etiam sagittis id diam ac rhoncus. Suspendisse ut rhoncus enim. Morbi
          vehicula sodales nibh quis mattis. Vestibulum et justo vitae odio
          aliquam suscipit eget eget ipsum. Cras facilisis leo nec sapien
          cursus, id condimentum elit dignissim. Maecenas finibus sed justo quis
          varius. Phasellus finibus arcu a velit pellentesque, pellentesque
          maximus lectus facilisis. Sed eu hendrerit risus.
        </Card.Text>

        <div className='row'>
          <div className='col-sm-12'>
            <Link to={`/edit/${id}`}>
              <Button block variant='secondary'>
                Edit
              </Button>
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ChallengeListItem
