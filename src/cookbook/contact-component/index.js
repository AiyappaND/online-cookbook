import React, { useState } from "react";
import { Container, Card, Row, Form, Button } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {createContactThunk} from "../services/contact-thunks";

function Contact() {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState(currentUser?.username);
    const [email, setEmail] = useState(currentUser?.email);
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;

        if (name === "" || name === undefined) {
            setErrors({...errors, name: "Name is required"});
            isValid = false;
        }

        if (email === "" || email === undefined) {
            setErrors({...errors, email: "Email is required"});
            isValid = false;
        }

        if (subject === "" || subject === undefined) {
            setErrors({...errors, subject: "Subject is required"});
            isValid = false;
        }

        if (message === "" || message === undefined) {
            setErrors({...errors, message: "Message is required"});
            isValid = false;
        }
        if (isValid) {
            setErrors({})
        }
        return isValid;
    }

    const handleContact = async (event) => {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid){
            setErrors({});
            const payload = ({name: name, email: email, subject: subject, message: message});
            await dispatch(createContactThunk(payload)).unwrap();
            alert("Your form has been submitted, thank you!");
            navigate(`/`);
        }
    };

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center">
                    <Card className="shadow px-4">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <h2 className="fw-bold mb-2 text-center text-uppercase ">Contact Us</h2>
                                <div className="mb-3">
                                    <Form onSubmit={handleContact}>
                                        <Form.Group className="mb-3 row" controlId="name">
                                            <Form.Label>
                                                Name:
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Enter Name" value={currentUser?.username}
                                                          required
                                                          onChange={(event) => setName(event.target.value)}
                                                          isInvalid={!!errors.name}/>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.name}
                                            </Form.Control.Feedback>

                                        </Form.Group>

                                        <Form.Group className="mb-3 row" controlId="email">
                                            <Form.Label>
                                                Email:
                                            </Form.Label>
                                            <Form.Control type="email" placeholder="Enter Email"
                                                          value={currentUser?.email}
                                                          required
                                                          onChange={(event) => setEmail(event.target.value)}
                                                          isInvalid={!!errors.email}/>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>


                                        </Form.Group>

                                        <Form.Group className="mb-3 row" controlId="subject">
                                            <Form.Label>Subject:</Form.Label>
                                            <Form.Control type="text"
                                                          placeholder="Enter Subject"
                                                          required
                                                          onChange={(event) => setSubject(event.target.value)}
                                                          isInvalid={!!errors.subject}/>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.subject}
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                        <Form.Group className="mb-3 row" controlId="content">
                                            <Form.Label>Message:</Form.Label>
                                            <Form.Control as=
                                                              'textarea' type="test"
                                                          rows={5}
                                                          placeholder="Enter Message"
                                                          required
                                                          onChange={(event) => setMessage(event.target.value)}
                                                          isInvalid={!!errors.message}/>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.message}
                                            </Form.Control.Feedback>
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
