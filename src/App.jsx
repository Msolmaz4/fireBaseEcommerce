import { BrowserRouter, Route,Routes } from "react-router-dom"



import {Header,Footer} from "./components"
import {Home,Contact} from "./pages"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Reset from "./pages/auth/Reset"


function App() {


  return (
    <>
 <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/reset" element={<Reset/>}/>
  </Routes>





  <Footer/>
 </BrowserRouter>
    </>
  )
}

export default App
