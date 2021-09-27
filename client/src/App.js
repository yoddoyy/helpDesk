import React from "react"
import './App.css'
import Ticket from "./ticket"
import List from "./list"
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Route} from 'react-router-dom'

 function App() {

  const ticket= () => <Ticket/>
  const list = () => <List/>  
  
  return (    
    <div>
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/ticket/0">ticket</Nav.Link>
              <Nav.Link href="/list">list</Nav.Link>              
            </Nav>
          </Container>
      </Navbar>
        <br />
      <div>
        <Route exact path="/" component={ticket}/>
        <Route path="/ticket/:tid" component={ticket}/>       
        <Route exact path="/list" component={list} />
      </div>      
    </div>
    
  )
}

export default App;
