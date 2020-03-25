import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import logo from "../../logo.svg"

export default function globalNav() {
  return (
    <header className='App-header'>
      <Navbar fixed='top' bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>
          <img
            alt='Slektor App Logo'
            src={logo}
            className='d-inline-block App-logo'
          />
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
            <Nav.Item>
              <LinkContainer to='/create'>
                <Nav.Link>Create</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to='/help'>
                <Nav.Link>Help</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
