import "./Slider.scss"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

import { sliderData } from "./slider-data"
import { useEffect, useState } from "react"
const Slider = () => {
    const [cur ,setCur] = useState(0)
    const slideLength = sliderData.length
    const nextSlide = ()=>{
        setCur(cur === slideLength - 1 ?   0 :  cur + 1)
    }
    const prevSlide =()=>{
        setCur(cur === 0  ?   slideLength - 1:  cur - 1)
    }
 
useEffect(()=>{
    setCur(0)
},[])
const autoScroll = true
let  slideInterval;
let intervalTime= 5000;



useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [cur, slideInterval, autoScroll]);


  return (
    <div className="slider">

        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>
        {
            sliderData?.map((slide,index)=>{
                const {heading,desc,image} = slide
                return (
                    <div key={index} className={index === cur ? "slide current" : "slide"}>
                   {
                    index === cur && (
                        <>
                         <img src={image} alt="sl"/>
                            <div className="content">
                                <h2>{heading}</h2>
                                <p>{desc}</p>
                                <hr />
                                <a href="#product" className="--btn --btn-primary">Now Shop</a>
                            </div>
                        </>
                    )
                   }

                    </div>
                )
            })
        }
    </div>
  )
}

export default Slider