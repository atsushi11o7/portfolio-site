import Link from "next/link";
import styles from "@/styles/logo.module.css"
import Image from "next/image";
import logo from "@/images/logo.png"

export default function Logo({ isHeadr = false }) {
    if (isHeadr) {
        return (
            <Link href="/"  legacyBehavior>
                <a className={styles.image}>
                    <figure>
                        <Image
                            src={logo}
                            alt="logo"
                            layout="responsive"
                            sizes="(min-width: 330px) 330px, 100vw"
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