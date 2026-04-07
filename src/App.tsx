import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const basename = import.meta.env.MODE === "production" ? "/react-notes" : "/";
  return (
    <>
      <BrowserRouter basename={basename}>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
