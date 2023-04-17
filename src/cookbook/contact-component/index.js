import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitContactForm } from '../redux/actions';
import { useHistory } from 'react-router-dom';

const ContactPage = ({ submitContactForm }) => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitContactForm(formData);
        setFormData({ name: '', email: '', subject: '', message: '' });
        history.push('/');
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
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name.."
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email.."
                    required
                />

                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject.."
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write something.."
                    required
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    submitContactForm: (formData) => dispatch(submitContactForm(formData)),
});

export default connect(null, mapDispatchToProps)(ContactPage);


