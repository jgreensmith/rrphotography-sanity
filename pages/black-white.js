import { sanityClient, urlFor } from "../sanity"
import { SRLWrapper } from 'simple-react-lightbox';

import styles from '../styles/Gallery/BlackWhite.module.scss';

const BlackWhite = ({ imageData }) => {
    console.log(imageData)
    
    return (
        <>
        
            <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Black and White Photography</h1>
                
                    <div className={styles['gallery-container']}>
                        {imageData.map((blackwhite, index) => {
                            return(
                              <SRLWrapper>
                                <div className={styles['gallery-square']} key={index}>
                                  <a className={styles['img-centre']} href={urlFor(blackwhite.blackwhiteImage).quality(100).url()}>
                                    <img 
                                      className={styles.opacity}
                                      src={urlFor(blackwhite.blackwhiteImage).size(300, 300).quality(90).fit("min").url()} 
                                      alt={blackwhite.alt}
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
    const query = '*[ _type == "blackwhite"]'
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

export default BlackWhite;
