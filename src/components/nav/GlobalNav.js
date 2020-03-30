import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import logo from "../../logo.svg"
import "./GlobalNav.sass"

export default function globalNav() {
  return (
    <Navbar className='GlobalNav' fixed='top' bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>
        <a className='App-Logo-Link' href='/'>
          <img
            alt='Slektor App Logo'
            src={logo}
            className='d-inline-block App-logo'
          />
          Slektor App
        </a>
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
  )
}
