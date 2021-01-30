import React from 'react';
import { Link } from 'react-router-dom';
import HomeCarousel from '../../components/carousel';

import './home.scss';


function Home() {
    return(

        <section className="section">
            <div className="block-container">
                <HomeCarousel/>
            </div>
            <div className="block-container">
                <h2 className="home-header">Welcome to Rebecca Reynolds Photography</h2>
                <p className="main-title sm">Bringing focus to the natural world.</p>
                <div className="object-container">
                    <div className="object-wrapper">
                        <Link to='/landscape' className="decoration">
                            <div className="object-img-wrapper">
                                <img className="img-fit" src="images/landscape-circle.jpg" alt="Landscape"></img>
                            </div>
                            <div className="object-info-wrapper">
                                <h3 className="blurb-header">Landscape Photography</h3>
                                <p className="blurb">Landscapes, Seascapes and Skyscapes</p>
                            </div>
                        </Link>
                        
                    </div>
                    <div className="object-wrapper">
                        <Link to='/wildlife' className="decoration">
                            <div className="object-img-wrapper">
                                <img className="img-fit" src="images/landscape-circle.jpg" alt="Landscape"></img>
                            </div>
                            <div className="object-info-wrapper">
                                <h3 className="blurb-header">Wildlife Photography</h3>
                                <p className="blurb">Flora and Fauna</p>
                            </div>
                        </Link>  
                    </div>
                    <div className="object-wrapper">
                        <Link to='/cyanotype' className="decoration">
                            <div className="object-img-wrapper">
                                <img className="img-fit" src="images/landscape-circle.jpg" alt="Landscape"></img>
                            </div>
                            <div className="object-info-wrapper">
                                <h3 className="blurb-header">Cyanotype Art</h3>
                                <p className="blurb">Inspired by the natural landscape</p>
                            </div>
                        </Link>
                    </div>
                    <div className="object-wrapper">
                        <Link to='/black-white' className="decoration">
                            <div className="object-img-wrapper">
                                <img className="img-fit" src="images/landscape-circle.jpg" alt="Landscape"></img>
                            </div>
                            <div className="object-info-wrapper">
                                <h3 className="blurb-header">Black & White Photography</h3>
                                <p className="blurb">The Natural World in Black & White</p>
                            </div>
                        </Link>
                    </div>
                </div>
               
            </div>
        </section>

    )
};

export default Home;