import React, {useState,useEffect} from "react"
import './App.css'
import Axios from "axios"
import Ticket from "./ticket"
import List from "./list"
import {Navbar,Nav,Container} from 'react-bootstrap'

 function App() {
  const [page, setPage] = useState(<Ticket/>)
  return (    
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" 
              onClick={(e) => { 
                setPage(<Ticket/>);
              }}>Ticket
              </Nav.Link>
              <Nav.Link href="#link" onClick={(e) => { 
                setPage(<List/>);
              }}>List</Nav.Link>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {page}
    </div>
    
  );
}

export default App;
