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
                                            <div className='col-md-4'>
                                                <Form.Label className="text-center">
                                                    Name
                                                </Form.Label>
                                            </div>
                                            <div className="col-md-7">
                                                <Form.Control type="text" placeholder="Enter Name"
                                                              required
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
