import React from 'react';
import { Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Library Hours</h2>
                    <p className="mb-2">Online Library: 24 X 7</p>
                    <h3 className="mb-2 font-bold text-amber-600">Offline Library</h3>
                    <p className="mb-2">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="mb-2">Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="mb-2">Sunday: Closed</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <p className="mb-2"><strong>Address:</strong> 123 Library Street, Booktown, BK 12345</p>
                    <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
                    <p className="mb-2"><strong>Email:</strong> info@librarysystem.com</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
                    <form className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea 
                            placeholder="Your Message" 
                            className="w-full p-2 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;