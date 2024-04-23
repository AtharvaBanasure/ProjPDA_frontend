import React, { useState } from "react";
import axios from 'axios';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const { name, email, message } = formData;
    const [emailError, setEmailError] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBlur = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };
    

const handleSubmit = async () => {
    if (emailError) {
        // If there's an email error, prevent form submission
        return;
    }
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/mail`, {
            name: name,
            email: email,
            msg: message
        });

        console.log(response);

        if (response.status === 200) {
            alert("Email sent successfully!");
            // Clear form data after successful submission
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } else {
            alert("Failed to send email. Please try again later.");
        }
    } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
    }
};


    return (
        <section className="text-gray-600 body-font relative">
            {/* Form content */}
            <div className="container px-5 py-12 mx-auto">
                {/* Form fields */}
                {/* Name */}
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
                {/* Email */}
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
                {emailError && (
                            <p className="text-red-500 text-xs mt-1">&emsp;Please enter a valid email address.</p>
                        )}
                {/* Message */}
                <div className="p-2 w-full">
                    <div className="relative">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleChange}
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                         
                    </div>
                </div>
                {/* Submit button */}
                <div className="p-2 w-full">
                    <button type="button" onClick={handleSubmit} className="flex mx-auto text-white bg-green-700 hover:bg-green-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">Submit</button>
                </div>
            </div>
        </section>
    );
}

export default Contact;