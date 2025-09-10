import type { ReactNode } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"

function UserLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </>
    )
}

export default UserLayout