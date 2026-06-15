import { useEffect, useLayoutEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SeoulDetailPage from "./pages/SeoulDetailPage";
import GwangjuDetailPage from "./pages/GwangjuDetailPage";
import CheonanDetailPage from "./pages/CheonanDetailPage";
import ForumPage from "./pages/ForumPage";
import NotFoundPage from "./pages/NotFoundPage";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function GoogleAnalytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${pathname}${search}`,
    });
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <GoogleAnalytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/seoul" element={<SeoulDetailPage />} />
        <Route path="/gwangju" element={<GwangjuDetailPage />} />
        <Route path="/cheonan" element={<CheonanDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}
