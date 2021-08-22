import React from 'react';

import styles from '../styles/Components/Button.module.scss';

const Button = () => {
    return(
        <>
            <div className={styles.line}></div>
            <div className={styles['btn-container']}>
                <div className={styles['btn-card']}>
                    <div className={styles['btn-info-wrapper']}>
                        <p className={styles['btn-text']}>
                            Shop here via Etsy
                        </p>
                        <br></br>
                    </div>
                    <div className={`${styles["btn-wrapper"]} ${styles["top-pad"]}`}>
                        <form className={styles['form-center']} action="https://www.etsy.com/uk/shop/HergestMoonlight" method="get" target="_blank" rel="noreferrer">
                            <button className={styles['etsy-btn']}>
                                Etsy
                            </button>
                        </form>
                    </div>
                </div>
                <div className={styles['btn-card']}>
                    <div className={styles['btn-info-wrapper']}>
                        <p className={styles['btn-text']}>
                            Made in the Marches Resident Artist 
                            <br></br>
                            <span className={styles['small-text']}> Border Monochrome Photographer of the Year 2020</span> 
                        </p>
                    </div>
                    <div className={styles['btn-wrapper']}>
                        <form className={styles['form-center']} action="http://www.madeinthemarches.com/rebecca-reynolds-resident.html" method="get" target="_blank" rel="noreferrer">
                            <button className={styles['made-btn']}>
                                Visit Website
                            </button>
                        </form>
                    </div>
                </div>
                
            </div>
            <div className={styles.line}></div>
        </>
        
            
        
    )
}

export default Button;