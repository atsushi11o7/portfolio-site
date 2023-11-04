import parse from "html-react-parser"
import Image from "next/image"

export default function ConvertBody({ contentHTML }) {
    const contentReact = parse(contentHTML, {
        replace: (node) => {
            if (node.name === "img") {
                const { src, alt, width, height } = node.attribs
                return (
                    <Image
                        layout="responsive"
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        sizes="(min-width: 1152px) 1152px, 100vw"
                    />
                )
            }
        },
    })
    console.log(contentReact)
    return <>{contentReact}</>
}