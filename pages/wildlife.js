import { sanityClient, urlFor } from "../sanity"
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { SRLWrapper } from 'simple-react-lightbox';

import styles from '../styles/Gallery/Wildlife.module.scss';

const Wildlife = ({ imageData }) => {
    console.log(imageData)
    
    return (
        <>
        
            <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Wildlife Photography</h1>
                <SRLWrapper>
                    <div className={styles['gallery-container']}>
                        {imageData.map((wildlife, index) => {
                            return(
                                <div className={styles['gallery-square']} key={index}>
                                    <a href={wildlife.wildlifeImage}>
                                        <img src={wildlife.wildlifeImage} alt="Wildlife" />
                                    </a> 
                                </div>
                            )
                        })} 
                    </div>
                </SRLWrapper>
                

            </div>
           
        </section> 
        
       </> 
    )
}

export const getServerSideProps = async () => {
    const query = '*[ _type == "wildlife"]'
    const imageData = await sanityClient.fetch(query)
  
    if (!imageData.length) {
      return {
        props: {
          imageData: [],
        },
      }
    } else {
      return {
        props: {
          imageData,
        },
      }
    }
  }

export default Wildlife;

// className={styles['img-centre']}
{/* <Img {...imageProps} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" /> */}