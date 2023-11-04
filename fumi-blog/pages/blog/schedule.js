import { getPostBySlug } from "@/lib/api"
import Container from "@/components/container"
import PostHeader from "@/components/post-header"
import PostBody from "@/components/post-body"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column"
import ConvertBody from "@/components/convert-body"
import Contact from "@/components/contact"
import Image from "next/image"

export default function Schedule({
    title,
    publish,
    update,
    content,
    eyecatch,
    category,
    tags
}) {
    return (
        <Container>
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} update={update} />

                <TwoColumn>
                    <TwoColumnMain>
                        <figure>
                            <Image
                                src={eyecatch.url}
                                alt=""
                                layout="responsive"
                                width={eyecatch.width}
                                height={eyecatch.height}
                                sizes="(min-width: 1152px) 1152px, 100vw"
                                priority
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
            </article>
        </Container>
    )
}

export async function getStaticProps() {
    const slug = "test"

    const post = await getPostBySlug(slug)

    console.log(post)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            update: post.updateDate,
            content: post.content,
            eyecatch: post.eyecatch,
            category: post.category,
            tags: post.tags
        },
    }
}