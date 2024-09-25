import "./App.css";
import Root from "./routes/root";
import { useTranslation } from "react-i18next";
function App() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  console.log("apiBaseUrl", apiBaseUrl);
  const { t } = useTranslation();


  return (
    <>
      <h1>{t('title')}</h1>
      <Root />
    </>
  );
}

export default App;
