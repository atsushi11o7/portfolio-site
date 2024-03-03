import Container from "./container"
import Header from "./header"
import Footer from "./footer"

export default function Layout ({ children }) {
    return (
        <>
            <Header />

            <main>
                <Container>{children}</Container>
            </main>


            <Footer />
        </>
    )
}