import React from 'react';

export default function InfoCard(props) {
    return (
        <div className='info-card'>
            <div className='card-details'>
                <h1>Juljeta Troka</h1>
                <h3>Frontend Develper</h3>
                <h5>troka.website</h5>
                <div className='contact-btn'>
                    <button className='email-btn'>
                        <span><img alt='logo' src={props.img} className='btn-icon'/></span>
                        <span className='btn-text'>{props.button}</span></button>

                    {props.buttonlinked &&
                        <button className='linkedIn-btn'>
                            <span><img alt='logo' src={props.secondimg} className='btn-icon'/></span>
                            <span className='btn-text'>{props.buttonlinked}</span></button>}
                </div>
                <div className='card-text'>
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader.
                        Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
            <div className='card-media'>
                    <span><img alt='social media' src={props.twitter} className='media-icon'/></span>
                    <span><img alt='social media' src={props.facebook} className='media-icon'/></span>
                    <span><img alt='social media' src={props.instagram} className='media-icon'/></span>
                    {props.linked &&<span><img alt='social media' src={props.linked} className='media-icon'/></span>}
                    <span><img alt='social media' src={props.github} className='media-icon'/></span>
                </div>
        </div>
    )
}