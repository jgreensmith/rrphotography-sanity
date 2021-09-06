import { sanityClient, urlFor } from "../sanity"
import { SRLWrapper } from 'simple-react-lightbox';

import styles from '../styles/Gallery/Wildlife.module.scss';

const Wildlife = ({ imageData }) => {
    console.log(imageData)
    
    return (
        <>
        
          <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Wildlife Photography</h1>
                
                <div className={styles['gallery-container']}>
                    {imageData.map((wildlife, index) => {
                        return(
                          <SRLWrapper>
                            <div className={styles['gallery-square']} key={index}>
                              <a className={styles['img-centre']} href={urlFor(wildlife.wildlifeImage).quality(100).fit("max").url()}>
                                <img 
                                  className={styles.opacity}
                                  src={urlFor(wildlife.wildlifeImage).size(300, 300).quality(90).fit("min").url()} 
                                  alt={wildlife.alt}
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
