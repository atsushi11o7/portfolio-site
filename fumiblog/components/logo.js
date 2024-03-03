import Link from "next/link";
import styles from "../styles/logo.module.css"
import Image from "next/image";
import { microCMSLoader } from "../lib/imageLoader";
// import logo from "@/images/logo.png"

const logo = {
    src: "https://images.microcms-assets.io/assets/d7b392575f8841d3843d4904efc74f14/91b937b10395424aa49e3a053abcef00/logo.png",
    height: 120,
    width: 440,
    blurDataURL: "data:image/png;base64",
}

export default function Logo({ isHeadr = false }) {
    if (isHeadr) {
        return (
            <Link href="/"  legacyBehavior>
                <a className={styles.image}>
                    <figure>
                        <Image
                            loader={microCMSLoader}
                            src={logo}
                            alt="logo"
                            sizes="(min-width: 330px) 330px, 100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </figure>
                </a>
            </Link>
        )
    } else {
        return (
            <Link href="/"  legacyBehavior>
                <a className={styles.basic}>FUMIBLOG</a>
            </Link>
        )
    }
}