import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";

function ContactList() {
    const [data, setData] = useState([{"name": "name", "email": "email", "subject" : "subject", "message" : "xyz"}]);

    const handleStatus = async (event, item) => {
        try {
            console.log(event, item);
        } catch (e) {
            if(e.code === "ERR_BAD_REQUEST") {
                alert("List does not exist, please sign up");
            }
            else {
                alert(e.message);
            }
        }
    };

    return (
        <div>
            <Container>
                <div className="mb-3 mt-md-4"></div>
                <h2 className="fw-bold mb-2 text-center text-uppercase ">Contact's List</h2>
                <div className="mb-3"></div>

                {data.length>0 ? data.map((item, index)=>{
                    return (
                        <Card className="shadow px-4 mb-2">
                            <Card.Body key={index}>
                                <p><strong>Name</strong>: {item.name}</p>
                                <p><strong>Email</strong>: {item.email}</p>
                                <p><strong>Topic</strong>: {item.subject}</p>
                                <p><strong>Message</strong>: {item.message}</p>
                                <p className="text-center"><button className={`${item.read ? 'btn btn-success':'btn btn-danger'}`}
                                           onClick={(e)=>{handleStatus(e,item)}}>Mark as Read</button></p>
                            </Card.Body>
                        </Card>
                    )
                }).reverse():(<p className="text-center mt-5">No Records Found</p>)}

            </Container>
        </div>

    );

}
export default ContactList;
