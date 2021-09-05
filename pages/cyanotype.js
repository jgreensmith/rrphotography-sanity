import { sanityClient, urlFor } from "../sanity"
import { SRLWrapper } from 'simple-react-lightbox';

import styles from '../styles/Gallery/Cyanotype.module.scss';

const Cyanotype = ({ imageData }) => {
    console.log(imageData)
    
    return (
        <>
        
            <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Cyanotype Photography</h1>
                
                    <div className={styles['gallery-container']}>
                        {imageData.map((cyanotype, index) => {
                            return(
                              <SRLWrapper>
                                <div className={styles['gallery-square']} key={index}>
                                  <a className={styles['img-centre']} href={urlFor(cyanotype.cyanotypeImage).quality(100).fit("max").url()}>
                                    <img 
                                      className={styles.opacity}
                                      src={urlFor(cyanotype.cyanotypeImage).size(300, 300).quality(90).fit("min").url()} 
                                      alt={cyanotype.alt}
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
    const query = '*[ _type == "cyanotype"]'
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

export default Cyanotype;
