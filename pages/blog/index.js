import { sanityClient, urlFor } from "../../sanity"
import Link from "next/link"

import styles from '../../styles/Posts.module.scss';

const Blog = ({ posts }) => {

    return (
        <>
        
        <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Blog Posts</h1>
                <>
                {posts.length ? (
                    <div className={styles.postsContainer}>
                        <>
                            {posts.map((post, index) => (
                                <Link href={`/blog/${post.slug.current}`} >
                                    <div key={index} className={styles.card}>
                                        <img src={urlFor(post.mainImage).size(200, 200).quality(90).fit("min").url()} />
                                        <div className={styles.details}>
                                            <h2>{post.title}</h2>
                                            <p className={styles.date}>
                                                Posted: {post.publishedAt}
                                            </p>
                                            <p>
                                                {post.subTitle}
                                            </p>
                                        </div>                                        
                                    </div>
                                </Link> 
                            ))}
                        </>
                        
                    </div>
                ) : ( <h3>Blog posts coming soon, stay tuned!</h3> )}
                </>

                
              
                
            </div>
         
        </section> 
      
        </> 
    )
}

export const getServerSideProps = async () => {
    const query = '*[ _type == "post" ]'
    const posts = await sanityClient.fetch(query)

    if (!posts.length) {
        return {
            props: {
                posts: [],
            },
        }
    } else {
        return {
            props: {
                posts,
            },
        }
    }
}


export default Blog
