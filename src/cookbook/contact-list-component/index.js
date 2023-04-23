import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {getContactThunk, updateContactThunk} from "../services/contact-thunks";

function ContactList() {
    const { currentUser } = useSelector((state) => state.user);
    const [unreadMessages, setUnreadMessages] = useState([]);
    const [readMessages, setReadMessages] = useState([]);
    const [dataToShow, setDataToShow] = useState([]);
    const [unreadToggle, setUnreadToggle] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect( () => {
        const checkLoggedInUser = async () => {
            if (!currentUser || !currentUser?.isAdmin) {
                alert("You don't have permission to view this page");
                navigate("/");
            }
        }
        checkLoggedInUser();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const fetchInitialData = async () => {
            const { payload }  = await dispatch(getContactThunk());
            let newReadData = [];
            let newUnreadData = [];

            payload.map(item => item.read? newReadData.push(item): newUnreadData.push(item))
            setReadMessages(newReadData)
            setUnreadMessages(newUnreadData)
            unreadToggle? setDataToShow(newUnreadData): setDataToShow(newReadData)
        }
        fetchInitialData();
        // eslint-disable-next-line
    }, [])


    const toggleMessageRead = async (event, item) => {
        try {
            let itemToSwitch = {...item}
            itemToSwitch.read = !itemToSwitch.read;
            let newUnreadMessages = [...unreadMessages];
            let newReadMessages = [...readMessages];

            if (itemToSwitch.read) {
                newUnreadMessages = newUnreadMessages.filter(message => message._id !== itemToSwitch._id)
                setUnreadMessages(newUnreadMessages);

                newReadMessages.push(itemToSwitch);
                setReadMessages(newReadMessages);
            }
            else {
                newReadMessages = newReadMessages.filter(message => message._id !== itemToSwitch._id)
                setReadMessages(newReadMessages);

                newUnreadMessages.push(itemToSwitch);
                setUnreadMessages(newUnreadMessages);
            }

            unreadToggle? setDataToShow(newUnreadMessages): setDataToShow(newReadMessages);

            await dispatch(updateContactThunk(itemToSwitch));

        } catch (e) {
            if(e.code === "ERR_BAD_REQUEST") {
                alert("Operation failed");
            }
            else {
                alert(e.message);
            }
        }
    };

    const toggleMessagesToShow = () => {
        const newToggle = !unreadToggle;
        setUnreadToggle(newToggle);
        newToggle? setDataToShow(unreadMessages): setDataToShow(readMessages)
    };

    return (
        <div>
            <Container>
                <div className="mb-3 mt-md-4"></div>
                <h2 className="fw-bold mb-2 text-center text-uppercase ">Feedback List</h2>
                <div className="mb-3"></div>
                <p className="text-center"><button className={`${unreadToggle ? 'btn btn-success':'btn btn-danger'}`}
                                                onClick={toggleMessagesToShow}>Toggle Read/Unread</button></p>
                <h4 className="fw-bold mb-2 text-center text-uppercase ">
                    {unreadToggle? "Unread Messages": "Read Messages"}</h4>

                {dataToShow.length>0 ? dataToShow.map((item, index)=>{
                    return (
                        <Card className="shadow px-4 mb-2">
                            <Card.Body key={index}>
                                <p><strong>Name</strong>: {item.name}</p>
                                <p><strong>Email</strong>: {item.email}</p>
                                <p><strong>Topic</strong>: {item.subject}</p>
                                <p><strong>Message</strong>: {item.message}</p>
                                <p className="text-center"><button className={`${!item.read ? 'btn btn-success':'btn btn-danger'}`}
                                           onClick={(e)=>{toggleMessageRead(e,item)}}>
                                    {item.read? "Mark unread": "Mark Read"}
                                </button></p>
                            </Card.Body>
                        </Card>
                    )
                }).reverse():(<p className="text-center mt-5">No Records Found</p>)}

            </Container>
        </div>

    );

}
export default ContactList;
