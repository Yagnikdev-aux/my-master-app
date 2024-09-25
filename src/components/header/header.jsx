import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
    const { i18n } = useTranslation();
    const [selected, setSelected] = useState(options[1]);
    const handleSelectChange = (newValue) => {
        setSelected(newValue);
        i18n.changeLanguage(newValue.value);
    };

    const props = {
        langSelect: <Select.Select options={options} onchange={handleSelectChange} value={selected} />
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
