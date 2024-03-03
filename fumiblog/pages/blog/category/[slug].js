import { getAllCategories, getAllPostsByCategory } from "@/lib/api";
import Meta from "@/components/meta";
import Container from "@/components/container";
import PostHeader from "@/components/post-header";
import Posts from "@/components/posts";
import { getImage } from "@/lib/getImage";
import { eyecatchLocal } from "@/lib/constants";

export default function Category ({ name, posts }) {
    return (
        <Container>
            <Meta pageTitle={name} pageDesc={`Articles in category ${name}`} />
            <PostHeader title={name} subtitle="Blog Category" />
            <Posts posts={posts} />
        </Container>
    )
}

export async function getStaticPaths() {
    const allCategories = await getAllCategories()
    return {
        paths: allCategories.map(({ slug }) => `/blog/category/${slug}`),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const catSlug = context.params.slug

    const allCategories = await getAllCategories()

    const category = allCategories.find(({ slug }) => slug === catSlug)
    
    const posts = await getAllPostsByCategory(category.id)
    
    for (const post of posts) {
        if (!post.hasOwnProperty("eyecatch")) {
            post.eyecatch = eyecatchLocal
        }
        const { base64 } = await getImage(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
    }

    return {
        props: {
            name: category.name,
            posts: posts,
        },
    }
}