// src/Booking.js
import React, { useState } from 'react';
import './styles.css';

const Booking = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [confirmation, setConfirmation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmation(`Booking confirmed for ${name} on ${date} at ${time} for ${guests} guests.`);
        // Clear form
        setName('');
        setDate('');
        setTime('');
        setGuests(1);
    };

    return (
        <div className="booking-form">
            <h2>Book a Table</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    required 
                />
                <input 
                    type="time" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    required 
                />
                <input 
                    type="number" 
                    min="1" 
                    value={guests} 
                    onChange={(e) => setGuests(e.target.value)} 
                    required 
                />
                <button type="submit">Reserve</button>
            </form>
            {confirmation && <p>{confirmation}</p>}
        </div>
    );
};

export default Booking;
