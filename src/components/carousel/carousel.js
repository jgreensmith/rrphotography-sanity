import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.scss';

class HomeCarousel extends Component {
    render() {
        return (
            <div className="carousel-wrapper">
                <Carousel 
                    showThumbs={false} 
                    autoPlay={false} 
                    infiniteLoop={true} 
                    interval={7000}
                    transitionTime={1000}
                    dynamicHeight={true}
                    showArrows={true}
                    showStatus={false}
                    stopOnHover={false}
                    showIndicators={true}
                >
                    <div>
                        <img src="images/LS.jpg" />
                    </div>
                    <div>
                        <img src="images/shadow-birdz.jpg" />
                    </div>
                    <div>
                        <img src="images/dogz.jpg" />
                    </div>
                    <div>
                        <img src="images/waterfall.jpg" />
                    </div>
                </Carousel>
            </div>
            
        );
    }
};
 
export default HomeCarousel;