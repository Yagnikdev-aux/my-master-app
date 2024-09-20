import { Outlet } from "react-router-dom";
import { Header } from "../components";

const Layout = () => {
    return (
        <div>
            <Header.Header />
            <main>
                <Outlet />
            </main>

            <footer>
                <p>© 2023 My Website</p>
            </footer>
        </div>
    );
};

export default Layout;
