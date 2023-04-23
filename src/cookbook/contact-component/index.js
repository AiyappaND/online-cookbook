import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { contactThunk } from "../services/auth-thunks";
import { Container, Card, Row, Form, Button } from "react-bootstrap";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleContact = async (event) => {
        try {
            event.preventDefault();
            await dispatch(contactThunk({ name, email, subject, message })).unwrap();
            setName('') 
            setEmail('') 
            setSubject('') 
            setMessage('')
        } catch (e) {
            if (e.code === "ERR_BAD_REQUEST") {
                alert("User does not exist, please sign up");
            }
            else {
                alert(e.message);
            }
        }
    };

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center">
                    <Card className="shadow px-4">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <h2 className="fw-bold mb-2 text-center text-uppercase ">Contact</h2>
                                <div className="mb-3">
                                    <Form onSubmit={handleContact}>
                                        <Form.Group className="mb-3 row" controlId="name">
                                            <div className='col-md-4'>
                                                <Form.Label className="text-center">
                                                    Name
                                                </Form.Label>
                                            </div>
                                            <div className="col-md-7">
                                                <Form.Control type="text" placeholder="Enter Name"
                                                required
                                                value={name}
                                                    onChange={(event) => setName(event.target.value)} />
                                            </div>

                                        </Form.Group>

                                        <Form.Group className="mb-3 row" controlId="email">
                                            <div className="col-md-4">
                                                <Form.Label className="text-center">
                                                    Email
                                                </Form.Label>
                                            </div>
                                            <div className="col-md-7">
                                                <Form.Control type="email" placeholder="Enter Email"
                                                required
                                                value={email}
                                                    onChange={(event) => setEmail(event.target.value)} />
                                            </div>


                                        </Form.Group>

                                        <Form.Group className="mb-3 row" controlId="subject">
                                            <div className="col-md-4">
                                                <Form.Label>Topic/Subject</Form.Label>
                                            </div>
                                            <div className="col-md-7">
                                                <Form.Control type="text"
                                                    placeholder="Enter Topic/Subject"
                                                    required
                                                    value={subject}
                                                    onChange={(event) => setSubject(event.target.value)} />
                                            </div>

                                        </Form.Group>
                                        <Form.Group className="mb-3 row" controlId="content">
                                            <div className="col-md-4">
                                                <Form.Label>Content</Form.Label>
                                            </div>
                                            <div className="col-md-7">
                                                <Form.Control as=
                                                    'textarea' type="test"
                                                    rows={5}
                                                    placeholder="Enter Content"
                                                    required
                                                    value={message}
                                                    onChange={(event) => setMessage(event.target.value)} />
                                            </div>

                                        </Form.Group>

                                        <div className="mb-3 text-center">
                                            <Button variant="primary" className='w-25' type="submit">
                                                Submit
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );

}
export default Contact;
