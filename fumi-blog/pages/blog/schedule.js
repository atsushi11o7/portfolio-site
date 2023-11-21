import { getPostBySlug } from "@/lib/api"
import Container from "@/components/container"
import PostHeader from "@/components/post-header"
import PostBody from "@/components/post-body"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column"
import ConvertBody from "@/components/convert-body"
/*import PostCategories from "@/components/post-categories"*/
import Contact from "@/components/contact"
import Image from "next/image"

export default function Schedule({
    title,
    publish,
    update,
    content,
    eyecatch,
    categories,
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
                                width={eyecatch.width}
                                height={eyecatch.height}
                                layout="responsive"
                                sizes="(min-width: 768px) 768px, 100vw"
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