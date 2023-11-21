import styles from "@/styles/post-body.module.css"

export default function PostBody({ children }) {
    console.log("inPB")
    console.log(children)
    return(
        <div className={styles.stack}>
            {children}
        </div>
    )
}