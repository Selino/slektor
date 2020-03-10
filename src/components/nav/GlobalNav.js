import React from "react"
import logo from "../../logo.svg"
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

export default function globalNav() {
  return (
    <header className='App-header'>
      <Navbar fixed='top' bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>
          <img
            alt='Slektor App Logo'
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{" "}
          Slektor App
        </Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Item>
              <LinkContainer to='/booklist'>
                <Nav.Link>Books</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to='/challenges'>
                <Nav.Link>Challenges</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}