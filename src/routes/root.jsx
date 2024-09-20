import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, User } from "../pages";

import Layout from "../layouts/layout";

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="about" element={<User.About />} />
                    <Route path="contact" element={<User.Contact />} />
                    <Route path="home" element={<User.Home />} />
                    <Route path="services" element={<User.Services />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Root;
