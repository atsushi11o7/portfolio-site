import { getAllPosts } from "../lib/api"
import Meta from "../components/meta"
import Container from "../components/container"
import Hero from "../components/hero"
import Posts from "../components/posts"
import Pagination from "../components/pagination"
import { getImage } from "../lib/getImage"
import { eyecatchLocal } from "../lib/constants"
import Image from "next/image"
import { microCMSLoader } from "../lib/imageLoader"
// import heroImage from "@/images/hero.jpg"

const heroImage = {
    src: "https://images.microcms-assets.io/assets/d7b392575f8841d3843d4904efc74f14/8b8e1a1b50634e7bbc9696757b9fd775/hero.jpg",
    height: 4000,
    width: 6000,
    blurDataURL: "data:image/jpeg;base64",
}

export default function Home({ posts }) {
    return (
        <Container>
            <Meta />
            <figure>
                <Image
                    loader={microCMSLoader}
                    src={heroImage}
                    alt=""
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    priority
                    placeholder="blur"
                />
            </figure>

            <Posts posts={posts} />
            <Pagination nextUrl="/blog" nextText="More Posts" />
        </Container>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts(4)

    for (const post of posts) {
        if (!post.hasOwnProperty("eyecatch")) {
            post.eyecatch = eyecatchLocal
        }
        const { base64 } = await getImage(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
    }

    return {
        props: {
            posts: posts,
        },
    }
}