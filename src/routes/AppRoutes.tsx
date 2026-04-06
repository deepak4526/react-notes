import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Variables from "../pages/Variables";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/variables" element={<Variables />} />
    </Routes>
  );
};
export default AppRoutes;
