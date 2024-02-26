

import { useState } from "react";
import Allfilter from "../../components/allfilter/Allfilter";
import Categories from "../../components/categories/Categories";
import Slider from "../../components/slider/Slider";
import Products from "../product/Products";
import { Footer } from "../../components";


const Home = () => {
  const [page,setPage]= useState()
  return (
    <div >
      <Slider />
      <Categories />
      <div style={{display:"flex"}}>
        <Allfilter />
        <Products page={page} setPage={setPage} />
      </div>
     {
      !page && <Footer/> 
     }
    </div>
  );
};


export default Home;
