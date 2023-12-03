import { getAllPosts } from "@/lib/api"
import Meta from "@/components/meta"
import Container from "@/components/container"
import Hero from "@/components/hero"
import Posts from "@/components/posts"
import Pagination from "@/components/pagination"
import { getImage } from "@/lib/getImage"
import { eyecatchLocal } from "@/lib/constants"
import Image from "next/image"
import heroImage from "@/images/hero.jpg"

export default function Home({ posts }) {
    return (
        <Container>
            <Meta />
            <figure>
                <Image
                    src={heroImage}
                    alt=""
                    layout="responsive"
                    sizes="100vw"
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