import { useLocation } from "react-router-dom";
import DefaultHeader from "./defaultHeader";
import UHeader from "./uHeader";
import AHeader from "./aHeader";

const Header = () => {
    const location = useLocation();
    const renderHeader = () => {
        switch (location.pathname) {
            case "/admin-dashboard":
                return <AHeader />;
            case "/dashboard":

                return <UHeader />;
            default:
                return <DefaultHeader />;
        }
    };
    return <>{renderHeader()}</>;
};

export default Header;
