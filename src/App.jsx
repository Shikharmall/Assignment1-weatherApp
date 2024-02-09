import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import RecentSearch from "./pages/RecentSearch";
import NoPage from "./pages/NoPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recentsearch" element={<RecentSearch />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
