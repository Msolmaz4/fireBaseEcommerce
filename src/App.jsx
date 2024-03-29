import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, Contact } from "./pages";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/notFound/NotFound";
import Detail from "./components/detail/Detail";
import Buy from "./components/buy/Buy";
import OrderHistory from "./pages/orderHistory/OrderHistory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/order" element={<OrderHistory />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
