import React from "react"
import Books from "../books/Books"
import { Row, Col } from "react-bootstrap"
import ChallengesList from "../challenges/ChallengesList"
import TotalAmount from "./TotalAmount"
import TotalActive from "./TotalActive"
import MostLucrative from "./MostLucrative"
import { connect } from "react-redux"

function Dashboard(props) {
  return (
    <>
      <Row>
        <Col sm={12} md={4} lg={2}>
          <Row>
            <Col xs={12}>
              <TotalAmount Challenges={props.challenges} />
            </Col>
            <Col xs={12}>
              <TotalActive Challenges={props.challenges} />
            </Col>
            <Col xs={12}>
              <MostLucrative Challenges={props.challenges} />
            </Col>
          </Row>
          <br />
        </Col>
        <Col sm={12} md={8} lg={5}>
          <ChallengesList />
        </Col>
        <Col sm={12} md={12} lg={5}>
          <Books />
        </Col>
      </Row>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    challenges: state.challenges,
  }
}

export default connect(mapStateToProps)(Dashboard)
