import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
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
