import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Header";
import Footer from "./Footer";
import Shadows from "./Pages/Guides/Shadows";
import Text from "./Pages/Guides/Text";
import Guides from "./Pages/Guides/Guides";
import Animations from "./Pages/Guides/Animations";

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
      {location.pathname !== "/" && <Header />}
      <div className="min-h-[calc(100vh-80px)] overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<Guides />}>
            <Route path="shadows" element={<Shadows />} />
            <Route path="text" element={<Text />} />
            <Route path="animations" element={<Animations />} />
          </Route>
        </Routes>
      </div>

      {location.pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
