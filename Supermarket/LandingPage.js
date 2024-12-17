import React from 'react';

const LandingPage = () => {
    return (
        <div style={landingStyle}>
            <h1>Welcome to Supermarket</h1>
            <p>Find your favorite products here.</p>
        </div>
    );
};

const landingStyle = {
    textAlign: 'center',
    padding: '50px',
    background: 'lightblue'
};

export default LandingPage;
