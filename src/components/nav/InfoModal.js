import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { Button, Modal } from "react-bootstrap"

export default function InfoModal() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Button size='' variant='link' onClick={handleShow}>
        <FontAwesomeIcon size='lg' icon={faQuestionCircle} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What is slektor?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Slektor is an app that lets kids fund their reading habits. By
            allowing friends and family to contribute to "Kickstarter like"
            reading challenges, we're making reading as lucrative as it is fun.
          </p>
          <p>
            The project is currently in a proof of concept phase and we plan to
            move into a Beta period in the coming months. Check back often as we
            add functionality.
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
}
