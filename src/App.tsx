import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SeoulDetailPage from "./pages/SeoulDetailPage";
import DetailPage2 from "./pages/DetailPage2";
import DetailPage3 from "./pages/DetailPage3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seoul" element={<SeoulDetailPage />} />
        <Route path="/gwangju" element={<DetailPage2 />} />
        <Route path="/cheonan" element={<DetailPage3 />} />
      </Routes>
    </BrowserRouter>
  );
}
