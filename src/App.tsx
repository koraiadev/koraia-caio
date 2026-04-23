import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage1 from "./pages/DetailPage1";
import DetailPage2 from "./pages/DetailPage2";
import DetailPage3 from "./pages/DetailPage3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/1" element={<DetailPage1 />} />
        <Route path="/detail/2" element={<DetailPage2 />} />
        <Route path="/detail/3" element={<DetailPage3 />} />
      </Routes>
    </BrowserRouter>
  );
}
