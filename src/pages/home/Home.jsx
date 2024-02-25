import { Footer } from "../../components";
import Slider from "../../components/slider/Slider";
import Products from "../product/Products";

const Home = () => {
  return (
    <div >
      <Slider />
      <Products />
      <Footer/>
    </div>
  );
};

export default Home;
