import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

function Contact() {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = 'service_9xmo9f4';
	const templateID = 'template_ID';
	const userID = 'user_3rA99fHNGeTe7mUcRnYxA';

    const onSubmit = (data, r) => {
        sendEmail("service_9xmo9f4", "template_ID", {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.phone,
            body: data.body
        }, "user_3rA99fHNGeTe7mUcRnYxA")
        r.target.reset();

    }

    const sendEmail = (serviceID, templateID, variables, userID) => {    
        emailjs
            .send(serviceID, templateID, variables, userID)
                .then(() => {
                setSuccessMessage("Thank you for contacting me. I will reach out to you as soon as possible.")
                })

                .catch(err => console.error(`Something went wrong... ${err}`));
    }

    return (
        <div id="Contact" className="contacts bg-dark">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form below.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <input
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    ref={
                                        register({
                                            required: "Please enter your name",
                                            maxLength: {
                                                value: 20,
                                                message: "Please enter a shorter name"
                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>

                        <div className="text-center">
                            <input
                                id="phone"
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                                ref={
                                    register({
                                        required: "Please enter your phone number"
                                    })
                                }
                            />
                            <div className="line"></div>                        
                        </div>
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>

                        <div className="text-center">
                            <input
                                id="email"
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                ref={
                                    register({
                                        required: "Please enter your email",
                                        pattern:{
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Please enter a valid email"
                                        }
                                    })
                                }
                            />
                            <div className="line"></div>
                        </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>

                            <div className="text-center">
                                <input
                                    id="subject"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    ref={
                                        register({
                                            required: "Please enter a subject"
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>

                        <div className="col-md-6 col-xs12">
                            <div className="text-center">
                                <textarea
                                    id="description"
                                    className="form-control"
                                    placeholder="Body"
                                    name="body"
                                    ref={
                                        register({
                                            required: "Please enter a message"
                                        })
                                    }
                                ></textarea>
                                <div className="line"></div>                        
                            </div>
                            <span className="error-message">
                                {errors.body && errors.body.message}
                            </span>
                                <button id="submit" className="btn-main-offer contact-btn" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;