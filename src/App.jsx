import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layouts
import DefaultLayout from "./layouts/DefaultLayout";
// Pages
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
