import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Video from "./Video";
import Form from "../pages/Form";
import Iletisim from "../pages/Iletisim";
import Anasayfa from "../pages/Anasayfa";
import Sartlar from "../pages/Sartlar";
import Sorular from "../pages/Sorular";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Video />
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/sartlar" element={<Sartlar />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/form" element={<Form />} />
          <Route path="/sorular" element={<Sorular />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
