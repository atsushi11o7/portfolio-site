import { getPostBySlug, getAllSlugs } from "@/lib/api"
import { prevNextPost } from "@/lib/prev-next-post"
import { extractText } from "@/lib/extract-text"
import Meta from "@/components/meta"
import Container from "@/components/container"
import PostHeader from "@/components/post-header"
import PostBody from "@/components/post-body"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column"
import ConvertBody from "@/components/convert-body"
import Contact from "@/components/contact"
import Pagination from "@/components/pagination"
import Image from "next/image"
import { microCMSLoader } from "@/lib/imageLoader"
import { eyecatchLocal } from "@/lib/constants"
import { getImage } from "@/lib/getImage"

export default function Post({
    title,
    publish,
    update,
    content,
    eyecatch,
    category,
    tags,
    description,
    prevPost,
    nextPost,
}) {
    return (
        <Container>
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} update={update} />

                <TwoColumn>
                    <TwoColumnMain>
                        <figure>
                            <Image
                                loader={microCMSLoader}
                                key={eyecatch.url}
                                src={eyecatch.url}
                                alt=""
                                width={eyecatch.width}
                                height={eyecatch.height}
                                sizes="(min-width: 1152px) 1152px, 100vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                priority
                                placeholder="blur"
                                blurDataURL={eyecatch.blurDataURL}
                            />
                        </figure>

                        <PostBody>
                            <ConvertBody contentHTML={content} />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <Contact />
                    </TwoColumnSidebar>
                </TwoColumn>

                <Pagination
                    prevText={prevPost.title}
                    prevUrl={`/blog/${prevPost.slug}`}
                    nextText={nextPost.title}
                    nextUrl={`/blog/${nextPost.slug}`}
                />
            </article>
        </Container>
    )
}

export async function getStaticPaths() {
    const allSlugs = await getAllSlugs()

    return {
        paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug

    const post = await getPostBySlug(slug)

    console.log(post)

    const description = extractText(post.content)

    const eyecatch = post.eyecatch ?? eyecatchLocal

    const { base64 } = await getImage(eyecatch.url)

    eyecatch.blurDataURL = base64

    const allSlugs = await getAllSlugs()
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            update: post.updateDate,
            content: post.content,
            eyecatch: eyecatch,
            category: post.category,
            tags: post.tags,
            description: description,
            prevPost: prevPost,
            nextPost: nextPost,
        },
    }
}