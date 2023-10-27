import LandingPage from "./pages/home"
import Books from "./pages/booklist";
import Category from "./pages/bookcategory";
import Loan from "./pages/loan";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booklist" element={<Books />} />
        <Route path="/bookcategory" element={<Category />} />
        <Route path="/loans" element={<Loan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App