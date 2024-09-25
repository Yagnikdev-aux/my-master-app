import "./App.css";
import Root from "./routes/root";
function App() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  console.log("apiBaseUrl", apiBaseUrl);
  return (
    <>
      <Root />
    </>
  );
}

export default App;
