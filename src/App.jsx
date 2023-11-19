import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Admin from "./components/pages/Admin";
import Login from "./components/pages/Login";
import Plane from "./components/pages/Plane";
import Bus from "./components/pages/Bus";
import ScrollToTop from "./components/pages/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/plane" element={<Plane />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
