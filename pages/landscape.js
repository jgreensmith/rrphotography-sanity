import React from 'react';
import LsImages from './ls-images';
import { SRLWrapper } from 'simple-react-lightbox';

import styles from '../styles/Gallery/Landscape.module.scss';

function Landscape() {
    return (
        <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Landscape Photography</h1>
                <SRLWrapper>
                    <div className={styles['gallery-container']}>
                        {LsImages.map((LsImages, index) => {
                            return(
                                <div className={styles['gallery-square']} key={index}>
                                    <a className={styles['img-centre']} href={`/images/ls-images/${LsImages.imageName}`}>
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