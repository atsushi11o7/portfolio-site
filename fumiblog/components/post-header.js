import ConvertDate from "./convert-date"
import styles from "../styles/post-header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"

export default function PostHeader({ title, subtitle, publish = "", update = ""}) {
    return (
        <div className={styles.stack}>
            <p className={styles.subtitle}>{subtitle}</p>
            <h1 className={styles.title}>{title}</h1>
            {publish && (
                <div className={styles.date}>
                    投稿日時
                    <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
                    <ConvertDate dateISO={publish} />
                </div>
            )}
            {update && (
                <div className={styles.date}>
                    更新日時
                    <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
                    <ConvertDate dateISO={update} />
                </div>
            )}
        </div>
    )
}