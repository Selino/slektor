import React from "react"
import { Navbar } from "react-bootstrap"
import mark from "../../slektor-mark.svg"
import "./GlobalNav.sass"
import InfoModal from "./InfoModal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookReader } from "@fortawesome/pro-duotone-svg-icons"

export default function globalNav() {
  return (
    <Navbar
      className='GlobalNav d-flex justify-content-between'
      fixed='top'
      bg='light'
      variant='light'
      expand='lg'
    >
      <Navbar.Brand>
        <FontAwesomeIcon className='app-logo' size='2x' icon={faBookReader} />
        <img
          alt={process.env.REACT_APP_TITLE}
          src={mark}
          className='d-inline-block service-mark'
        />
      </Navbar.Brand>
      <InfoModal />
    </Navbar>
  )
}
