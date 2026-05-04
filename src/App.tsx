import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SeoulDetailPage from "./pages/SeoulDetailPage";
import GwangjuDetailPage from "./pages/GwangjuDetailPage";
import CheonanDetailPage from "./pages/CheonanDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seoul" element={<SeoulDetailPage />} />
        <Route path="/gwangju" element={<GwangjuDetailPage />} />
        <Route path="/cheonan" element={<CheonanDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}
