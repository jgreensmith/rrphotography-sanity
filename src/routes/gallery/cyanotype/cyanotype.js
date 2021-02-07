import React from 'react';
import CImages from './c-images';
import { SRLWrapper } from 'simple-react-lightbox';

import './cyanotype.scss';

function Cyanotype() {
    return (
        <section className="section">
            <div className="block-container">
                <h1 className="main-title heading">Cyanotype Art</h1>
                <SRLWrapper>
                    <div className="gallery-container">
                        {CImages.map((CImages, index) => {
                            return(
                                <div className="gallery-square" key={index}>
                                    <a className="img-centre" href={`/images/${CImages.imageName}`}>
                                        <img className={CImages.cName} src={`/images/${CImages.imageName}`}></img>
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

export default Cyanotype;