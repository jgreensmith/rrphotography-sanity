import { sanityClient, urlFor } from "../sanity"
import { SRLWrapper } from 'simple-react-lightbox';

import styles from '../styles/Gallery/Landscape.module.scss';

const Landscape = ({ imageData }) => {
    console.log(imageData)
    
    return (
        <>
        
            <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Landscape Photography</h1>
                
                    <div className={styles['gallery-container']}>
                        {imageData.map((landscape, index) => {
                            return(
                              <SRLWrapper>
                                <div className={styles['gallery-square']} key={index}>
                                  <a className={styles['img-centre']} href={urlFor(landscape.landscapeImage).quality(100).url()}>
                                    <img 
                                      className={styles.opacity}
                                      src={urlFor(landscape.landscapeImage).size(300, 300).quality(90).fit("min").url()} 
                                      alt={landscape.alt}
                                    />
                                  </a> 
                                </div>
                              </SRLWrapper>
                            )
                        })} 
                    </div>
            </div>
           
        </section> 
        
       </> 
    )
}

export const getServerSideProps = async () => {
    const query = '*[ _type == "landscape"]'
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

export default Landscape;
