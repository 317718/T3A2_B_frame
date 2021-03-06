import React from 'react';
import BookingForm from '../BookingForm.js'
import './Booking.css';

function Booking() {
    return (
        <div className="booking-bg">
            <div className="bookingCard">
                <div className="bookingContainer">
                    <div className="booking-h1">
                        <h1 className="bookingH1">BOOK A SERVICE</h1>
                    </div>
                    <div className="booking-form">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booking;