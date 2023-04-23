import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {profileThunk, logoutThunk, updateUserThunk}
    from "../services/auth-thunks";
import {Button, Card, Container, Form, Row} from "react-bootstrap";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    useEffect( () => {
        const fetchProfileData = async () => {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
        }
        fetchProfileData();
        // eslint-disable-next-line
    }, []);

    const validateForm = () => {
        let isValid = true;
        if (profile.firstName === "" || profile.firstName === undefined) {
            setErrors({...errors, firstName: "First name is required"});
            isValid = false;
        }

        if (profile.lastName === ""|| profile.firstName === undefined) {
            setErrors({...errors, lastName: "Last name is required"});
            isValid = false;
        }

        if (profile.dob === "" || profile.dob === undefined) {
            setErrors({...errors, dob: "DOB is required"});
            isValid = false;
        }

        if (profile.username === "" || profile.username === undefined) {
            setErrors({...errors, username: "Username is required"});
            isValid = false;
        }

        if (profile.email === "" || profile.email === undefined) {
            setErrors({...errors, email: "Email is required"});
            isValid = false;
        }

        if (profile.password === "" || profile.password === undefined) {
            setErrors({...errors, password: "Password is required"});
            isValid = false;
        }
        return isValid;
    }

    const saveProfile = async (event) => {
        try {
            event.preventDefault();
            const isValid = validateForm();
            if (isValid) {
                await dispatch(updateUserThunk(profile));
            }
        }
        catch (e) {
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
                                <h2 className="fw-bold mb-2 text-center text-uppercase ">Your Profile</h2>
                                <div className="mb-3">
                                    <Form onSubmit={saveProfile}>
                                        <Form.Group className="mb-3" controlId="firstName">
                                            <Form.Label className="text-center">
                                                First Name
                                            </Form.Label>
                                            <Form.Control type="text" value={profile.firstName}
                                                          onChange={(event) => {
                                                              const newProfile = {
                                                                  ...profile,
                                                                  firstName: event.target.value,
                                                              };
                                                              setProfile(newProfile);
                                                          }} isInvalid={!!errors.firstName}/>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.firstName}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="lastName">
                                            <Form.Label className="text-center">
                                                Last Name
                                            </Form.Label>
                                            <Form.Control type="text" value={profile.lastName}
                                                          onChange={(event) => {
                                                              const newProfile = {
                                                                  ...profile,
                                                                  lastName: event.target.value,
                                                              };
                                                              setProfile(newProfile);
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
                                            <Form.Control type="date" value={profile.dob.split("T")[0]}
                                                          onChange={(event) => {
                                                              const newProfile = {
                                                                  ...profile,
                                                                  dob: event.target.value,
                                                              };
                                                              setProfile(newProfile);
                                                          }} isInvalid={!!errors.dob}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.dob}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="isPremium">
                                            <Form.Label className="text-center">
                                                Premium User?
                                            </Form.Label>
                                            <Form.Check type="checkbox" checked={profile.isPremium}
                                                        onChange={(event) => {
                                                            const newProfile = {
                                                                ...profile,
                                                                isPremium: event.target.checked,
                                                            };
                                                            setProfile(newProfile);
                                                        }}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="isAuthor">
                                            <Form.Label className="text-center">
                                                Author?
                                            </Form.Label>
                                            <Form.Check type="checkbox" checked={profile.isAuthor}
                                                        onChange={(event) => {
                                                            const newProfile = {
                                                                ...profile,
                                                                isAuthor: event.target.checked,
                                                            };
                                                            setProfile(newProfile);
                                                        }}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="username">
                                            <Form.Label className="text-center">
                                                Username
                                            </Form.Label>
                                            <Form.Control type="text" value={profile.username}
                                                          onChange={(event) => {
                                                              const newProfile = {
                                                                  ...profile,
                                                                  username: event.target.value,
                                                              };
                                                              setProfile(newProfile);
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
                                            <Form.Control type="email" value={profile.email}
                                                          onChange={(event) => {
                                                              const newProfile = {
                                                                  ...profile,
                                                                  email: event.target.value,
                                                              };
                                                              setProfile(newProfile);
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
                                            <Form.Control type="password" value={profile.password}
                                                          onChange={(event) => {
                                                              const newProfile = {
                                                                  ...profile,
                                                                  password: event.target.value,
                                                              };
                                                              setProfile(newProfile);
                                                          }} isInvalid={!!errors.password}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.password}
                                            </Form.Control.Feedback>
                                        </Form.Group>



                                        <div className="d-grid mb-5">
                                            <Button variant="primary" type="submit">
                                                Save
                                            </Button>
                                        </div>

                                        <div className="d-grid">
                                            <Button variant="secondary" onClick={() => {
                                                dispatch(logoutThunk());
                                                navigate("/login");
                                            }}>
                                                Logout
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
    )
}
export default ProfileScreen;
