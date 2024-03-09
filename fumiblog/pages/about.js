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
                        <h2>ABOUT</h2>
                        <p>
                            はじめまして。atsushiと申します。
                        </p>
                        <p>
                            現在大学院生で日々の学びをまとめる場としてブログを作成しました。
                        </p>
                        <p>
                            このブログは2024年に HTML/CSS/JavaScript の練習を兼ねて作成しました。主に機械学習関連の技術を学ぶ過程や、それ以外のプログラミングに関する活動の記録を投稿する予定です。
                        </p>
                        <p>
                            私の知識も、このブログも発展途上であり、追々機能の追加やデザインの変更を行っていきます。
                        </p>

                        <h3>profile</h3>
                        <p>
                            atsushi
                        </p>
                        <p>
                            茨城県出身の大学院生。
                        </p>
                        <p>
                            機械学習関連の研究を行っている。
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