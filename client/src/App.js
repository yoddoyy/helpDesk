import React, {useState,useEffect} from "react"
import './App.css'
import Ticket from "./ticket"
import List from "./list"
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Route} from 'react-router-dom'

 function App() {
  // const [page, setPage] = useState(<Ticket/>)
  // const [ticket, setTicket] = useState(<Ticket/>)
  // const [list, setList] = useState(<List/>)
  const ticket= () => <Ticket/>
  const list = () => <List/>
  
  
  return (    
    <div>
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/ticket">ticket</Nav.Link>
              <Nav.Link href="/list">list</Nav.Link>              
            </Nav>
          </Container>
      </Navbar>
        <br />
      <div>
        <Route exact path="/" component={ticket}/>
        <Route path="/ticket/:id" component={ticket}/>
       
        <Route exact path="/list" component={list} />
      </div>
      
    </div>
    
  );
}

export default App;
