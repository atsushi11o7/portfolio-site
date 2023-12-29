import parse from "html-react-parser";
import Image from "next/image";
import { microCMSLoader } from "@/lib/imageLoader";

export default function ConvertBody({ contentHTML }) {
    const contentReact = parse(contentHTML, {
        replace: (node) => {
            if (node.name === "img") {
                const { src, alt, width, height } = node.attribs
                return (
                    <Image
                        loader={microCMSLoader}
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        sizes="(min-width: 768px) 768px, 100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        priority
                    />
                )
            }
        },
    })
    return contentReact
}