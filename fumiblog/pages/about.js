import Meta from "@/components/meta"
import Container from "@/components/container"
import Hero from "@/components/hero"
import PostBody from "@/components/post-body"
import Contact from "@/components/contact"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column"
import Image from "next/image"
import { microCMSLoader } from "@/lib/imageLoader"
// import eyecatch from "@/images/about.png"

const eyecatch = {
    src: "https://images.microcms-assets.io/assets/d7b392575f8841d3843d4904efc74f14/6742302f3a91432e94bd490bdfd93a4f/about.png",
    height: 643,
    width: 1119,
    blurDataURL: "data:image/png;base64",
}

export default function About() {
    return (
        <Container>
            <Hero
                subtitle="aboutのせつめい"
            />

            <TwoColumn>
                <TwoColumnMain>
                    <figure>
                        <Image
                            loader={microCMSLoader}
                            src={eyecatch}
                            alt=""
                            sizes="(min-width: 768px) 768px, 100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
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