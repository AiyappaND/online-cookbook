import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
import {Container, Card, Row, Form, Button} from "react-bootstrap";

function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async (event) => {
        try {
            event.preventDefault();
            await dispatch(loginThunk({username, password})).unwrap();
            navigate("/profile");
        } catch (e) {
            if(e.code === "ERR_BAD_REQUEST") {
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
                                <h2 className="fw-bold mb-2 text-center text-uppercase ">Login</h2>
                                <div className="mb-3">
                                    <Form onSubmit={handleLogin}>
                                        <Form.Group className="mb-3" controlId="userName">
                                            <Form.Label className="text-center">
                                                Username
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Enter Username"
                                                          onChange={(event) => setUsername(event.target.value)} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password"
                                                          placeholder="Enter Password"
                                                          onChange={(event) => setPassword(event.target.value)} />
                                        </Form.Group>

                                        <div className="d-grid">
                                            <Button variant="primary" type="submit">
                                                Login
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
export default LoginScreen;
