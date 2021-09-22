import React, {useState,useEffect} from "react"
import {Button,Col,Container,Table, Row,Form} from 'react-bootstrap'
import './App.css';
import Axios from "axios"

export default function List() {
    const [status, setStatus] = useState('')
    return (
        <div>
            <Container>
                <h1>List</h1>
                <Row>
                    <Col xs={10}></Col>
                    <Col>
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
                    </Col>
                </Row>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">title</th>
                        <th scope="col">contract</th>
                        <th scope="col">description</th>
                        <th scope="col">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </div>
    )
}
