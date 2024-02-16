import "./Slider.scss"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

import { sliderData } from "./slider-data"
import { useState } from "react"
const Slider = () => {
    const [cur ,setCur] = useState(0)
  return (
    <div className="slider">

        <AiOutlineArrowLeft className="arrow prev"/>
        <AiOutlineArrowRight className="arrow next"/>
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