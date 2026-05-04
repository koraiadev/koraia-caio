import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SeoulDetailPage from "./pages/SeoulDetailPage";
import GwangjuDetailPage from "./pages/GwangjuDetailPage";
import CheonanDetailPage from "./pages/CheonanDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
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
