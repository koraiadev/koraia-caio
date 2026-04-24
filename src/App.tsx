import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SeoulDetailPage from "./pages/SeoulDetailPage";
import GwangjuDetailPage from "./pages/GwangjuDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seoul" element={<SeoulDetailPage />} />
        <Route path="/gwangju" element={<GwangjuDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
