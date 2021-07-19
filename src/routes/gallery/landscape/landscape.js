import React from 'react';
import LsImages from './ls-images';
import { SRLWrapper } from 'simple-react-lightbox';

import './landscape.scss';

function Landscape() {
    return (
        <section className="section">
            <div className="block-container">
                <h1 className="main-title heading">Landscape Photography</h1>
                <SRLWrapper>
                    <div className="gallery-container">
                        {LsImages.map((LsImages, index) => {
                            return(
                                <div className="gallery-square" key={index}>
                                    <a className="img-centre" href={`/images/ls-images/${LsImages.imageName}`}>
                                        <img className={LsImages.cName} src={`/images/ls-images/${LsImages.imageName}`} alt="Landscapes"></img>
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

export default Landscape;