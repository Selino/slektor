import React from "react"
import { Navbar } from "react-bootstrap"
import logo from "../../logo.svg"

export default function Nav() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>
        <img
          className='App-logo'
          alt='logo'
          src={logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{" "}
        Slektor App
      </Navbar.Brand>
    </Navbar>
  )
}
