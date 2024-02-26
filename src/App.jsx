import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, Contact } from "./pages";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/notFound/NotFound";


function App() {


  return (
    <>
      <BrowserRouter>
        <div >
          <Header /> 
          <div >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          
          </div>
      
        </div>
      </BrowserRouter>
      
      <ToastContainer />
    </>
  );
}

export default App;
