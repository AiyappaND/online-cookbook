import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { contactListThunk, contactListUpdate} from "../services/auth-thunks";
import { Container, Card, Row, Form, Button, Table } from "react-bootstrap";

function ContactList() {
    const [data, setData] = useState([]);
    const [toggle, seToggle] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleStatus = async (event, id) => {
        try {
            event.preventDefault();
            await dispatch(contactListUpdate(id)).unwrap();
            seToggle(true)
            
            // navigate("/contact-list");
        } catch (e) {
            if(e.code === "ERR_BAD_REQUEST") {
                alert("List does not exist, please sign up");
            }
            else {
                alert(e.message);
            }
        }
    };

    useEffect(()=>{
        const fetchContactData = async () => {
            const { payload } = await dispatch(contactListThunk());
            if (!payload) {
                alert("ContactList Server Error!")
                navigate("/")
            }
            // console.log('payload', payload)
            setData(payload);
        }
        fetchContactData();

        seToggle(false)
    },[toggle])

    return (
        <div>
            <Container>
            <h2 className="fw-bold mb-2 text-center text-uppercase ">Contact's List</h2>
            
            {data.length>0 ? data.map((item, index)=>{
                return (
                <Card className="shadow px-4 mb-2">
                            <Card.Body key={index}>
                                <p><strong>Name</strong>: {item.name}</p>
                                <p><strong>Email</strong>: {item.email}</p>
                                <p><strong>Topic</strong>: {item.subject}</p>
                                <p><strong>Content</strong>: {item.message}</p>
                                <p><button className={`${item.read ? 'btn btn-success':'btn btn-danger'}`} onClick={(e)=>{handleStatus(e,item._id)}}>Mark as Read</button></p>
                            </Card.Body>
                </Card>
                )
            }).reverse():(<p className="text-center mt-5">No Records Found</p>)}
                
            </Container>
        </div>
    );

}
export default ContactList;
