import React from 'react';


import './about.scss';

function About() {
    return (
        <section className="section">
            <div className="block-container">
                <h1 className="main-title heading">About Me</h1>
                <div className="about-container">
                    <div className="about-info-wrapper">
                        <p className="about-info">
                            My aim is for my photography and art to show my love for the British countryside
                            and the tranquility it gives. Having family and friends who live with long-term conditions,
                            with depression, anxiety and other difficulties, it is wonderful to see how uplifting and 
                            transformative a beautiful view, a bird, or even a piece of grass can be.</p>
                        
                        <p className="about-info">
                            The natural world is so rich in its variety. 
                            The same landscape never looks or feels the same, 
                            as the weather and the seasons constantly transform the 
                            views with different colours, shadows and light.  
                            Having firsthand experience with the benefits of nature to 
                            mental health and wellbeing, I want to bring them to as many 
                            people as possible, recognising that not everyone is able 
                            to get out and experience it for themselves. This is my vision.</p>
                        
                        <h3 className="blurb-header">
                            My Pledge:
                        </h3>
                        <p className="about-info">
                            10% of the profits raised by sales of prints will be given to my nominated charities. 
                            For 2021, my charities are:
                        </p>   
                        <ul>
                            <li><p className="about-info">Alzheimer's Society</p></li>
                            <li><p className="about-info">The Woodland Trust </p></li>
                            <li><p className="about-info">RNLI</p></li>
                        </ul> 
                        <p className="about-info">
                            If you would like any profits from your purchase to go to a charity of your choice, 
                            please let me know and I will make the donation on your behalf.</p>
                    </div>
                    <div className="profile-photo-wrapper">
                        <img className="temp-img-size" src="/images/about-profilephoto.jpg" alt="Profile"></img>
                    </div>
                </div>
                
            </div>
        </section> 
    )
}

export default About;