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
        <FontAwesomeIcon icon={faQuestionCircle} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What is slektor?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Aenean lacinia, ligula sit amet dignissim ultricies, mauris tortor
          vulputate erat, non fermentum odio nulla sit amet eros. Duis sit amet
          dui congue, ultricies quam bibendum, faucibus felis. Quisque lobortis
          leo sit amet laoreet imperdiet. Nunc viverra id nibh vel tincidunt.
          Vivamus cursus molestie urna sed malesuada. Maecenas ac ligula
          fermentum, venenatis diam placerat, euismod odio. Mauris facilisis
          quis eros nec commodo. Proin tempor justo velit, sed tempus neque
          pharetra in. Ut hendrerit neque est, tincidunt sollicitudin ipsum
          rhoncus ac. Pellentesque dui mi, lacinia eu auctor in, lobortis non
          felis. Phasellus consectetur eget ex varius viverra.
        </Modal.Body>
      </Modal>
    </>
  )
}
