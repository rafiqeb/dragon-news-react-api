import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import LatestNews from "../layout/LatestNews";
import Navbar from "../layout/Navbar";
import LeftNavbar from "../mainSection/LeftNavbar";
import RightNav from "../mainSection/RightNav";


const MainLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className="max-w-7xl mx-auto">
                <LatestNews></LatestNews>
            </section>
            <nav className="max-w-7xl mx-auto mt-4">
                <Navbar></Navbar>
            </nav>
            <main className="max-w-7xl mx-auto grid grid-cols-12 gap-3">
                <aside className="left col-span-3"><LeftNavbar></LeftNavbar></aside>
                <section className="col-span-6"><Outlet></Outlet></section>
                <aside className="col-span-3"><RightNav></RightNav></aside>
            </main>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default MainLayout;