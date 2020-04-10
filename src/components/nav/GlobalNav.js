import React from "react"
import { Navbar } from "react-bootstrap"
import mark from "../../slektor-mark.svg"
import "./GlobalNav.sass"
import InfoModal from "./InfoModal"

export default function globalNav() {
  return (
    <Navbar
      className='GlobalNav'
      fixed='top'
      bg='light'
      variant='light'
      expand='lg'
    >
      <Navbar.Brand>
        <img
          alt={process.env.REACT_APP_TITLE}
          src={mark}
          className='d-inline-block service-mark'
        />
        <strong className='tag-line'>[ the lucrative reading app ]</strong>
      </Navbar.Brand>
      <Navbar.Collapse className='justify-content-end'>
        <InfoModal />
      </Navbar.Collapse>
    </Navbar>
  )
}
