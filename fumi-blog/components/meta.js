import Head from "next/head";
import { siteMeta } from "@/lib/constants"
import { useRouter } from "next/router";
import siteImg from "@/images/logo.png"

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon} = siteMeta

export default function Meta({ pageTitle, pageDesc, pageImg, pageImgW, pageImgH }) {
    // ページタイトル
    const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle

    // 説明
    const desc = pageDesc ?? siteDesc

    // URL
    const router = useRouter()
    const url = `${siteUrl}${router.asPath}`

    // OGP画像
    const img = pageImg || siteImg.src
    const imgW = pageImgW || siteImg.width
    const imgH = pageImgH || siteImg.height
    const imgUrl = img.startsWith("https") ? img: `${siteUrl}${img}`

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />

            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />

            <link rel="canonical" href={url} />
            <mata property="og:url" content={url} />

            <mata property="og:site_name" content={siteTitle} />
            <meta property="og:type" content={siteType} />
            <meta property="og:locale" content={siteLocale} />

            <link rel="icon" href={siteIcon} />
            <link rel="apple-touch-icon" href={siteIcon} />

            <meta property="og:image" content={imgUrl} />
            <meta property="og:image:width" content={imgW} />
            <meta property="og:image:height" content={imgH} />
            <mata name="X:card" content="summary_large_image" />
        </Head>
    )
}