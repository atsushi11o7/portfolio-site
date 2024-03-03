import styles from "../styles/posts.module.css"
import Link from "next/link"
import Image from "next/image"
import { microCMSLoader } from "../lib/imageLoader"

export default function Posts({ posts }) {
    return (
        <div className={styles.gridContainer}>
            {posts.map(({ title, slug, eyecatch }) => (
                <article className={styles.post} key={slug}>
                    <Link href={`/blog/${slug}`} legacyBehavior>
                        <a>
                            <figure>
                                <Image
                                    loader={microCMSLoader}
                                    src={eyecatch.url}
                                    alt=""
                                    sizes="(min-width: 1152px) 576px, 50vw"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                    priority
                                    placeholder="blur"
                                    blurDataURL={eyecatch.blurDataURL}
                                />
                            </figure>
                            <h2>{title}</h2>
                        </a>
                    </Link>
                </article>
            ))}
        </div>
    )
}