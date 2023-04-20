import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {anonymousProfileThunk}
    from "../services/auth-thunks";
import {Card, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";

function AnonymousProfileScreen() {
    const navigate = useNavigate();
    const params  = useParams();
    const [profile, setProfile] = useState({});
    const dispatch = useDispatch();
    const username = params.username;

    useEffect( () => {
        const fetchProfileData = async () => {
            const { payload } = await dispatch(anonymousProfileThunk(username));
            if (!payload) {
                alert("Profile does not exist on this platform!")
                navigate("/")
            }
            setProfile(payload);
        }
        fetchProfileData();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center">
                    <Card className="shadow px-4">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <h2 className="fw-bold mb-2 text-center text-uppercase ">User Profile</h2>
                                <div className="mb-3">
                                    <Row className="mb-3 text-center fw-bold">
                                        Username: {profile.username}
                                    </Row>
                                    <Row className="mb-3 text-center">
                                        First Name: {profile.firstName}
                                    </Row>
                                    <Row className="mb-3 text-center">
                                        Last Name: {profile.lastName}
                                    </Row>
                                    <Row className="mb-3 text-center">
                                        Recipe Author? {profile.isAuthor?"Yes": "No"}
                                    </Row>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}
export default AnonymousProfileScreen;
