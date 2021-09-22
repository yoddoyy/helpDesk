import React, { useState, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import "./App.css";
import Axios from "axios";

export default function Ticket() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [contract, setContract] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const submitForm = () => {
    Axios.post("http://localhost:3001/api/helpdesk/saveTicket", {
      id: id,
      title: title,
      contract_info: contract,
      description: description,
      status: status,
    }).then(() => {
      alert("insert success");
    });
  };

  return (
    <div>
      <Container>
        <h1>Ticket</h1>
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contract">
            <Form.Label>contract information</Form.Label>
            <Form.Control
              type="text"
              name="contract"
              onChange={(e) => {
                setContract(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Select
            aria-label="select"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option>status</option>
            <option value="pending">pending</option>
            <option value="accepted">accepted</option>
            <option value="resolved">resolved</option>
            <option value="rejected">rejected</option>
          </Form.Select>
          <br />
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
