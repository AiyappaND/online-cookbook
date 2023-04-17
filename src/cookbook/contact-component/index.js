import React from 'react';
import { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // do something with form data
        console.log(name, email, subject, message);
    };

    return (
        <div className="container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name.."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your email.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject.."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Write something.."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default ContactForm;
