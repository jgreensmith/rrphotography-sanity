import React from 'react';
import CImages from './c-images';
import { SRLWrapper } from 'simple-react-lightbox';

import styles from '../styles/Gallery/Cyanotype.module.scss';

function Cyanotype() {
    return (
        <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Cyanotype Art</h1>
                <SRLWrapper>
                    <div className={styles['gallery-container']}>
                        {CImages.map((CImages, index) => {
                            return(
                                <div className={styles['gallery-square']} key={index}>
                                    <a className={styles['img-centre']} href={`/images/c-images/${CImages.imageName}`}>
                                        <img className={CImages.cName} src={`/images/c-images/${CImages.imageName}`} alt="Cyanotypes"></img>
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