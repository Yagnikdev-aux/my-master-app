import { useLocation } from "react-router-dom";
import DefaultHeader from "./defaultHeader";
import UHeader from "./uHeader";
import AHeader from "./aHeader";
import { Select } from "../../components";
import { useState } from "react";

const options = [
    { value: "de", label: "German" },
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "gu", label: "Gujarati" },
    { value: "hi", label: "Hindi" },
    { value: "zh", label: "Chinese" },
];

const Header = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(options[1]);

    const props = {
        langSelect: <Select.Select options={options} onchange={setSelected} value={selected} />
    }

    const renderHeader = () => {
        switch (location.pathname) {
            case "/admin-dashboard":
                return <AHeader />;
            case "/dashboard":

                return <UHeader />;
            default:
                return <DefaultHeader {...props} />;
        }
    };
    return <>{renderHeader()}</>;
};

export default Header;
