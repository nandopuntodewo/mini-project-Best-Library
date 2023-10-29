import LandingPage from "./pages/home"
import Books from "./pages/booklist";
import Category from "./pages/bookcategory";
import Loan from "./pages/loan";
import AddBookForm from "./pages/addbook";
import AddMemberForm from "./pages/addmember";
import Login from "./pages/adminlogin";
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
        <Route path="/admin/addbook" element={<AddBookForm />} />
        <Route path="/admin/addmember" element={<AddMemberForm />} />
        <Route path="/admin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App