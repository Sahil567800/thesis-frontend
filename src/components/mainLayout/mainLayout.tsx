import { Outlet } from 'react-router-dom'
import Footer from "../common/footer";
import Header from "../common/header";
export default function MainLayout() {
    return <>
        <Header></Header>
        <main>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
    </>
}