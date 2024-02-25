import { Footer } from "../../components";
import Allfilter from "../../components/allfilter/Allfilter";
import Categories from "../../components/categories/Categories";
import Slider from "../../components/slider/Slider";
import Products from "../product/Products";

const Home = () => {
  return (
    <div >
      <Slider />
      <Categories/>
      <div style={{display:"flex"}}>
      <Allfilter/>
      <Products />
 </div>
 <div style={{ marginBottom: "auto" }}> 
   <Footer/>
 </div>
     
    </div>
  );
};

export default Home;
