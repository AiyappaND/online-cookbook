import React, {useState} from 'react'
import { Button, Row, Container, Card, Form } from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {registerThunk} from "../services/auth-thunks";

export default function RegisterComponent() {
    const [newUser, setNewUser] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;

        if (newUser.firstName === "" || newUser.firstName === undefined) {
            setErrors({...errors, firstName: "First name is required"});
            isValid = false;
        }

        if (newUser.lastName === ""|| newUser.firstName === undefined) {
            setErrors({...errors, lastName: "Last name is required"});
            isValid = false;
        }

        if (newUser.dob === "" || newUser.dob === undefined) {
            setErrors({...errors, dob: "DOB is required"});
            isValid = false;
        }

        if (newUser.username === "" || newUser.username === undefined) {
            setErrors({...errors, username: "Username is required"});
            isValid = false;
        }

        if (newUser.email === "" || newUser.email === undefined) {
            setErrors({...errors, email: "Email is required"});
            isValid = false;
        }

        if (newUser.password === "" || newUser.password === undefined) {
            setErrors({...errors, password: "Password is required"});
            isValid = false;
        }
        return isValid;
    }

    const handleRegister = async (event) => {
        try {
            event.preventDefault();

            const isValid = validateForm();

            if (isValid){
                await dispatch(registerThunk(newUser)).unwrap();
                navigate("/profile");
            }
        } catch (e) {
            alert(e.message);
        }
    };

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center">
                    <Card className="shadow px-4">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <h2 className="fw-bold mb-2 text-center text-uppercase ">Online Cookbook</h2>
                                <div className="mb-3">
                                    <Form onSubmit={handleRegister}>
                                        <Form.Group className="mb-3" controlId="firstName">
                                            <Form.Label className="text-center">
                                                First Name
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Enter First Name"
                                              onChange={(event) => {
                                                const latestUser = {
                                                    ...newUser,
                                                    firstName: event.target.value,
                                                };
                                                setNewUser(latestUser);
                                            }} isInvalid={!!errors.firstName}/>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.firstName}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="lastName">
                                            <Form.Label className="text-center">
                                                Last Name
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Enter Last Name"
                                              onChange={(event) => {
                                                  const latestUser = {
                                                      ...newUser,
                                                      lastName: event.target.value,
                                                  };
                                                  setNewUser(latestUser);
                                              }} isInvalid={!!errors.lastName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.lastName}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="dob">
                                            <Form.Label className="text-center">
                                                Date of Birth
                                            </Form.Label>
                                            <Form.Control type="date"
                                              onChange={(event) => {
                                                  const latestUser = {
                                                      ...newUser,
                                                      dob: event.target.value,
                                                  };
                                                  setNewUser(latestUser);
                                              }} isInvalid={!!errors.dob}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.dob}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="isPremium">
                                            <Form.Label className="text-center">
                                                Admin?
                                            </Form.Label>
                                            <Form.Check type="checkbox"
                                                        onChange={(event) => {
                                                            const latestUser = {
                                                                ...newUser,
                                                                isAdmin: event.target.checked,
                                                            };
                                                            setNewUser(latestUser);
                                                        }}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="isPremium">
                                            <Form.Label className="text-center">
                                                Premium User?
                                            </Form.Label>
                                            <Form.Check type="checkbox"
                                                onChange={(event) => {
                                                    const latestUser = {
                                                        ...newUser,
                                                        isPremium: event.target.checked,
                                                    };
                                                    setNewUser(latestUser);
                                                }}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="isAuthor">
                                            <Form.Label className="text-center">
                                                Author?
                                            </Form.Label>
                                            <Form.Check type="checkbox"
                                                onChange={(event) => {
                                                    const latestUser = {
                                                        ...newUser,
                                                        isAuthor: event.target.checked,
                                                    };
                                                    setNewUser(latestUser);
                                                }}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="username">
                                            <Form.Label className="text-center">
                                                Username
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Enter Username"
                                              onChange={(event) => {
                                                  const latestUser = {
                                                      ...newUser,
                                                      username: event.target.value,
                                                  };
                                                  setNewUser(latestUser);
                                              }} isInvalid={!!errors.username}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.username}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label className="text-center">
                                                Email address
                                            </Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"
                                              onChange={(event) => {
                                                  const latestUser = {
                                                      ...newUser,
                                                      email: event.target.value,
                                                  };
                                                  setNewUser(latestUser);
                                              }} isInvalid={!!errors.email}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="password"
                                        >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password"
                                              onChange={(event) => {
                                                  const latestUser = {
                                                      ...newUser,
                                                      password: event.target.value,
                                                  };
                                                  setNewUser(latestUser);
                                              }} isInvalid={!!errors.password}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.password}
                                            </Form.Control.Feedback>
                                        </Form.Group>



                                        <div className="d-grid">
                                            <Button variant="primary" type="submit">
                                                Create Account
                                            </Button>
                                        </div>
                                    </Form>
                                    <div className="mt-3">
                                        <p className="mb-0  text-center">
                                            Already have an account?{" "}
                                            <a href="/login" className="text-primary fw-bold">
                                                Log In
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}