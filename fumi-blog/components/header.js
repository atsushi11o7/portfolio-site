import Container from "./container"
import Logo from "./logo"
import Nav from "./nav"
import styles from "../styles/header.module.css"

export default function Header() {
    return (
        <header>
            <Container large>
                <div className={styles.flexContainer}>
                    <Logo isHeadr />
                    <Nav />
                </div>
            </Container>
        </header>
    )
}