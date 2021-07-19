import React from 'react';
import BwImages from './bw-images';
import { SRLWrapper } from 'simple-react-lightbox';

import './black-white.scss';

function BlackWhite() {
    return (
        <section className="section">
            <div className="block-container">
                <h1 className="main-title heading">Black & White Photography</h1>
                <SRLWrapper>
                    <div className="gallery-container">
                        {BwImages.map((BwImages, index) => {
                            return(
                                <div className="gallery-square" key={index}>
                                    <a className="img-centre" href={`/images/bw-images/${BwImages.imageName}`}>
                                        <img className={BwImages.cName} src={`/images/bw-images/${BwImages.imageName}`}></img>
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

export default BlackWhite;