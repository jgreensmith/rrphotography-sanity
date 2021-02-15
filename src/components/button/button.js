import React from 'react';

import './button.scss';

const Button = () => {
    return(
        <>
            <div className="line"></div>
            <div className="btn-container">
                <div className="btn-card">
                    <div className="btn-info-wrapper">
                        <p className="btn-text">
                            Shop here via Etsy
                        </p>
                        <br></br>
                    </div>
                    <div className="btn-wrapper top-pad">
                        <form className="form-center" action="https://www.etsy.com/uk/shop/HergestMoonlight" method="get" target="_blank" rel="noreferrer">
                            <button className="etsy-btn">
                                Etsy
                            </button>
                        </form>
                    </div>
                </div>
                <div className="btn-card">
                    <div className="btn-info-wrapper">
                        <p className="btn-text">
                            Made in the Marches - Photographer of the year 2020
                        </p>
                    </div>
                    <div className="btn-wrapper">
                        <form className="form-center" action="http://www.madeinthemarches.com/rebecca-reynolds-resident.html" method="get" target="_blank" rel="noreferrer">
                            <button className="made-btn">
                                Visit Website
                            </button>
                        </form>
                    </div>
                </div>
                
            </div>
            <div className="line"></div>
        </>
        
            
        
    )
}

export default Button;