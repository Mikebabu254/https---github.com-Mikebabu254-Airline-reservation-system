import React, { useState } from 'react';

const BookingTicket = () => {
    const [isRoundTrip, setIsRoundTrip] = useState(false);

    const handleTripType = (tripType) => {
        setIsRoundTrip(tripType === 'round');
    };

    return (
        <form style={{
            marginTop: '20px',
            background: 'linear-gradient(135deg, #f0c27b, #4b1248)',
            padding: '20px',
            borderRadius: '8px',
            color: '#fff',
            maxWidth: '600px',
            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
            margin: '0 auto'
        }}> 
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <button 
                    type="button" 
                    onClick={() => handleTripType('round')} 
                    style={{
                        background: isRoundTrip ? '#4b1248' : '#ccc', 
                        color: '#fff', 
                        border: 'none', 
                        padding: '10px 20px', 
                        borderRadius: '5px', 
                        cursor: 'pointer',
                        marginRight: '10px'
                    }}
                >
                    Round Trip
                </button>
                <button 
                    type="button" 
                    onClick={() => handleTripType('oneWay')} 
                    style={{
                        background: !isRoundTrip ? '#4b1248' : '#ccc', 
                        color: '#fff', 
                        border: 'none', 
                        padding: '10px 20px', 
                        borderRadius: '5px', 
                        cursor: 'pointer'
                    }}
                >
                    One Way Trip
                </button>
            </div>  

            <div className="d-flex flex-wrap" style={{ gap: '20px', justifyContent: 'center' }}>
                <div className="d-flex flex-column" style={{ minWidth: '120px' }}>
                    <label htmlFor="fromLocation" className="form-label">Where from</label>
                    <input 
                        type="text"
                        id="fromLocation"
                        placeholder="Enter your location"
                        required
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            fontSize: '1em'
                        }}
                    />
                </div>

                <div className="d-flex flex-column" style={{ minWidth: '120px' }}>
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <input 
                        type="text"
                        id="destination"
                        placeholder="Enter your destination"
                        required
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            fontSize: '1em'
                        }}
                    />
                </div>

                <div className="d-flex flex-column" style={{ minWidth: '120px' }}>
                    <label htmlFor="departure" className="form-label">Departure</label>
                    <input 
                        type="date"
                        id="departure"
                        required
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            fontSize: '1em'
                        }}
                    />
                </div>

                <div 
                    className="d-flex flex-column" 
                    style={{ 
                        minWidth: '120px', 
                        visibility: isRoundTrip ? 'visible' : 'hidden', 
                        filter: isRoundTrip ? 'none' : 'blur(2px)' 
                    }}
                >
                    <label htmlFor="return" className="form-label">Return</label>
                    <input 
                        type="date"
                        id="return"
                        disabled={!isRoundTrip} // Disable input when it’s not a round trip
                        required={isRoundTrip} // Only require if round trip is selected
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            fontSize: '1em'
                        }}
                    />
                </div>

                <div className="d-flex flex-column" style={{ minWidth: '120px' }}>
                    <label htmlFor="seats" className="form-label">Seats</label>
                    <input 
                        type="number"
                        id="seats"
                        min="1"  // Prevent negative values
                        required
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            fontSize: '1em'
                        }}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button style={{
                    background: '#4b1248', 
                    color: '#fff', 
                    border: 'none', 
                    padding: '12px 30px', 
                    borderRadius: '5px', 
                    cursor: 'pointer',
                    fontSize: '1em'
                }}>Search</button>
            </div>
        </form>
    );
};

export default BookingTicket;
