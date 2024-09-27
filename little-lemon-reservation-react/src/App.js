// src/App.js
import React from 'react';
import Booking from './Booking'; // Import your Booking component
import './App.css'; // Import your CSS file

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Little Lemon Restaurant</h1>
            </header>
            <Booking /> {/* Include the Booking component */}
        </div>
    );
}

export default App;
