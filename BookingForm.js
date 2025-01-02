import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        name: '',
        contact: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/bookings', formData);
            alert('Booking confirmed!');
        } catch (error) {
            alert('Error in booking');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" name="date" onChange={handleChange} required />
            <input type="time" name="time" onChange={handleChange} required />
            <input type="number" name="guests" min="1" onChange={handleChange} required />
            <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
            <input type="text" name="contact" placeholder="Contact Details" onChange={handleChange} required />
            <button type="submit">Book Table</button>
        </form>
    );
};

export default BookingForm;
