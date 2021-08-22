import React from 'react';
import BwImages from './bw-images';
import { SRLWrapper } from 'simple-react-lightbox';

import styles from '../styles/Gallery/BlackWhite.module.scss';

function BlackWhite() {
    return (
        <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Black & White Photography</h1>
                <SRLWrapper>
                    <div className={styles['gallery-container']}>
                        {BwImages.map((BwImages, index) => {
                            return(
                                <div className={styles['gallery-square']} key={index}>
                                    <a className={styles['img-centre']} href={`/images/bw-images/${BwImages.imageName}`}>
                                        <img className={BwImages.cName} src={`/images/bw-images/${BwImages.imageName}`} alt="black and white"></img>
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