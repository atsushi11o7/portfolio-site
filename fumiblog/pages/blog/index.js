import { getAllPosts } from "@/lib/api"
import Meta from "@/components/meta"
import Container from "@/components/container"
import Hero from "@/components/hero"
import Posts from "@/components/posts"
import { eyecatchLocal } from "@/lib/constants"
import { getImage } from "@/lib/getImage"

export default function Blog({ posts }) {
    return (
        <Container>
            <Meta pageTitle="Blog" />
            <Hero
                subtitle="blogのせつめい"
                imageOn
            />

            <Posts posts={posts} />
        </Container>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts()

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