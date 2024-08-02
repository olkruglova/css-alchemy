import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Header";
import Footer from "./Footer";
import Shadows from "./Pages/Guides/Shadows";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <div>
          <Header />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shadows" element={<Shadows />} />
      </Routes>

      {location.pathname !== "/" && (
        <div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
