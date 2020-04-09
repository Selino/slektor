import React from "react"
import { Navbar } from "react-bootstrap"
import logo from "../../logo.svg"
import mark from "../../slektor-mark.svg"
import "./GlobalNav.sass"

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
          src={logo}
          className='d-inline-block App-logo'
        />
        <img
          alt={process.env.REACT_APP_TITLE}
          src={mark}
          className='d-inline-block'
        />
      </Navbar.Brand>
    </Navbar>
  )
}
