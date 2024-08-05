import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Header";
import Footer from "./Footer";
import Guides from "./Pages/Guides/Guides";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import { lazy, Suspense } from "react";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

const Shadows = lazy(() => import("./Pages/Guides/Shadows"));
const Animations = lazy(() => import("./Pages/Guides/Animations"));
const Text = lazy(() => import("./Pages/Guides/Text"));

function MainContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <div className="min-h-[calc(100vh-80px)] overflow-x-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guides" element={<Guides />}>
              <Route path="shadows/:shadowType" Component={Shadows} />
              <Route path="text" Component={Text} />
              <Route path="animations/:animationType" Component={Animations} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </Suspense>
      </div>

      {location.pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
