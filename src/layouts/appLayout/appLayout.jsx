import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

const AppLayout = () => {
    return (
        <div>
            <Header.Header />
            <main>
                <Outlet />
            </main>
            <Footer.Footer />
        </div>
    );
};

export default AppLayout;
