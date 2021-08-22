import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';

import styles from '../styles//Gallery/Gallery.module.scss';

function Gallery() {
    return(

        <section className={styles.section}>
            <div className={styles['block-container']}>
            <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Gallery</h1>
                <div className={styles['object-container']}>
                    <div className={styles['object-wrapper']}>
                        <Link href="/landscape">
                            <a className={styles.decoration}>
                                <div className={styles['object-img-wrapper']}>
                                    <img className={styles['img-fit']} src="images/home/ls-circle.jpg" alt="Landscape"></img>
                                </div>
                                <div className={styles['object-info-wrapper']}>
                                    <h3 className={styles['blurb-header']}>Landscape Phohrefgraphy</h3>
                                    <p className={styles.blurb}>Landscapes, Seascapes and Skyscapes</p>
                                </div>
                            </a>
                            
                        </Link>
                        
                    </div>
                    <div className={styles['object-wrapper']}>
                        <Link href="/wildlife">
                            <a className={styles.decoration}>
                                <div className={styles['object-img-wrapper']}>
                                    <img className={styles['img-fit']} src="images/home/wl-circle.jpg" alt="Landscape"></img>
                                </div>
                                <div className={styles['object-info-wrapper']}>
                                    <h3 className={styles['blurb-header']}>Wildlife Phohrefgraphy</h3>
                                    <p className={styles.blurb}>Flora and Fauna</p>
                                </div>
                            </a>

                            
                        </Link>  
                    </div>
                    <div className={styles['object-wrapper']}>
                        <Link href="/cyanotype">
                            <a className={styles.decoration}>
                                <div className={styles['object-img-wrapper']}>
                                    <img className={styles['img-fit']} src="images/home/c-circle.jpg" alt="Landscape"></img>
                                </div>
                                <div className={styles['object-info-wrapper']}>
                                    <h3 className={styles['blurb-header']}>Cyanotype Art</h3>
                                    <p className={styles.blurb}>Inspired by the Natural Landscape</p>
                                </div>
                            </a>

                            
                        </Link>
                    </div>
                    <div className={styles['object-wrapper']}>
                        <Link href="/black-white">
                            <a className={styles.decoration}>
                                <div className={styles['object-img-wrapper']}>
                                    <img className={styles['img-fit']} src="images/home/bw-circle.jpg" alt="Landscape"></img>
                                </div>
                                <div className={styles['object-info-wrapper']}>
                                    <h3 className={styles['blurb-header']}>Black & White Phohrefgraphy</h3>
                                    <p className={styles.blurb}>The Natural World in Black & White</p>
                                </div>
                            </a>


                        </Link>
                    </div>
                </div>
                <Button/>
            </div>
        </section>

    )
};

export default Gallery;