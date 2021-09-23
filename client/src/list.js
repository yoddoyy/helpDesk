import React, {useState,useEffect} from "react"
import {Button,Col,Container,Table, Row,Form} from 'react-bootstrap'
import './App.css';
import Axios from "axios"

export default function List() {
    const [listStatus, setListStatus] = useState('')
    const [sort, setSort] = useState('')
    const [listTicket, setListTicket] = useState([])
    useEffect(() => {
        Axios.post("http://localhost:3001/api/helpdesk/listTicket", {
            status:listStatus,
            order:sort
        }).then((res)=>{
            setListTicket(res.data)
        })
        
    }, [listStatus,sort])    
    // const tableData = ()=>{
    //     listTicket.map((val)=> {
    //         return <tr key={val.id}>
    //             <td>{val.title}</td>
    //             <td>{val.contract_info}</td>
    //             <td>{val.description}</td>
    //             <td>{val.status}</td>
    //             <td>{val.update_at}</td>
    //         </tr>
    //     })
    // }
    console.log('AAAAAAAAAAAAAAAAAAAAAA',listTicket)
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
                            setListStatus(e.target.value);
                            }}
                        >
                            <option value="status">status</option>
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
                            <th scope="col" onClick={() => {
                                setSort('status');
                                }}>status</th>
                            <th scope="col" onClick={() => {
                                setSort('update_at');
                                }}>lastUpdate</th>
                        </tr>
                    </thead>
                    <tbody>                    
                    {
        listTicket.map((val)=> {
            return (<tr key={val.id}>
                <td>{val.title}</td>
                <td>{val.contract_info}</td>
                <td>{val.description}</td>
                <td>{val.status}</td>
                <td>{val.update_at}</td>
            </tr>)
        })
    }
                    </tbody>
                </table>
           
            </Container>
        </div>
    )
}
