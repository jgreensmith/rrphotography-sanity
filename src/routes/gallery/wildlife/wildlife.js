import React from 'react';
import WlImages from './wl-images';
import { SRLWrapper } from 'simple-react-lightbox';

import './wildlife.scss';

function Wildlife() {
    return (
        <section className="section">
            <div className="block-container">
                <h1 className="main-title heading">Wildlife Photography</h1>
                <SRLWrapper>
                    <div className="gallery-container">
                        {WlImages.map((WlImages, index) => {
                            return(
                                <div className="gallery-square" key={index}>
                                    <a className="img-centre" href={`/images/${WlImages.imageName}`}>
                                        <img className={WlImages.cName} src={`/images/${WlImages.imageName}`}></img>
                                    </a> 
                                </div>
                            )
                        })} 
                    </div>
                </SRLWrapper>
            </div>
        </section> 
    )
}

export default Wildlife;