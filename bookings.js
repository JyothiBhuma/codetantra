import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const { data } = await axios.get('http://localhost:5000/api/bookings');
            setBookings(data);
        };
        fetchBookings();
    }, []);

    return (
        <div>
            <h1>All Bookings</h1>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        {booking.date} {booking.time} - {booking.name} ({booking.guests} guests)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Bookings;
