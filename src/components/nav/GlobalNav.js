import React from "react"
import { Navbar } from "react-bootstrap"
import logo from "../../logo.svg"
import "./GlobalNav.sass"

export default function globalNav() {
  return (
    <Navbar className='GlobalNav' fixed='top' bg='dark' variant='dark'>
      <Navbar.Brand>
        <img
          alt='Slektor App Logo'
          src={logo}
          className='d-inline-block App-logo'
        />
        {process.env.REACT_APP_TITLE}
      </Navbar.Brand>
    </Navbar>
  )
}
