import React from "react"
import { Navbar } from "react-bootstrap"
import mark from "../../slektor-mark.svg"
import "./GlobalNav.sass"
import InfoModal from "./InfoModal"

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
        <img
          alt={process.env.REACT_APP_TITLE}
          src={mark}
          className='d-inline-block app-logo'
        />
      </Navbar.Brand>
      <InfoModal />
    </Navbar>
  )
}
