import React, {Component} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

class NavigationBar extends Component {

  render(){
    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/new/message">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default NavigationBar
