import React, { useState } from "react";
import { Container, Card, Row, Form, Button } from "react-bootstrap";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleContact = async (event) => {
        event.preventDefault();
        console.log({ name, email, subject, message });
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
                                                <Form.Label>
                                                    Name:
                                                </Form.Label>
                                                <Form.Control type="text" placeholder="Enter Name"
                                                              required
                                                              onChange={(event) => setName(event.target.value)} />

                                        </Form.Group>

                                        <Form.Group className="mb-3 row" controlId="email">
                                                <Form.Label>
                                                    Email:
                                                </Form.Label>
                                                <Form.Control type="email" placeholder="Enter Email"
                                                              required
                                                              onChange={(event) => setEmail(event.target.value)} />


                                        </Form.Group>

                                        <Form.Group className="mb-3 row" controlId="subject">
                                                <Form.Label>Subject:</Form.Label>
                                                <Form.Control type="text"
                                                              placeholder="Enter Subject"
                                                              required
                                                              onChange={(event) => setSubject(event.target.value)} />

                                        </Form.Group>
                                        <Form.Group className="mb-3 row" controlId="content">
                                                <Form.Label>Message:</Form.Label>
                                                <Form.Control as=
                                                                  'textarea' type="test"
                                                              rows={5}
                                                              placeholder="Enter Message"
                                                              required
                                                              onChange={(event) => setMessage(event.target.value)} />

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
