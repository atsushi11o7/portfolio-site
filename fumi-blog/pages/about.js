import Meta from "@/components/meta"
import Container from "@/components/container"
import Hero from "@/components/hero"
import PostBody from "@/components/post-body"
import Contact from "@/components/contact"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column"
import Image from "next/image"
import eyecatch from "@/images/about.png"

export default function About() {
    return (
        <Container>
            <Meta pageTitle="About" />
            <Hero
                subtitle="aboutのせつめい"
            />

            <TwoColumn>
                <TwoColumnMain>
                    <figure>
                        <Image
                            src={eyecatch}
                            alt=""
                            layout="responsive"
                            sizes="(min-width: 768px) 768px, 100vw"
                            priority
                            placeholder="blur"
                        />
                    </figure>
                    <PostBody>
                        <h2>準備中</h2>
                        <p>
                            あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
                        </p>
                        <p>
                            あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
                        </p>
                        <p>
                            あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
                        </p>
                        <p>
                            あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
                        </p>
                    </PostBody>
                </TwoColumnMain>

                <TwoColumnSidebar>
                    <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
    )
}