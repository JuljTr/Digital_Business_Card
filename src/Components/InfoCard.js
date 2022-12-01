import React from 'react';
// import '../index.css';

export default function InfoCard() {
    return (
        <div className='info--card'>
            <div className='card--details'>
                <div></div>
                <h1>Juljeta Troka</h1>
                <h3>Frontend Develper</h3>
                <h5>troka.website</h5>
                <button>Email</button>
                <button>LinkedIn</button>
                <div className='card--text'>
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. 
                        Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>

        </div>
    )
}