import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Card = (props)=>{
    let review= props.review;
    return(
        <div className="flex flex-col md:relative">
        <div className="absolute top-[-2rem] z-[10] mx-auto">
            <img className="aspect-square rounded-full w-[100px] h-[100px] z-25"
            src={review. image}/>
            
        </div>
        <div className="text-center mt-7">
           <p className="font-bold text-2xl capitalize">{review.name}</p> 
        </div>
        <div className="text-center mt-7">
            <p className="text-violet-300 uppercase text-sm">{review.job}</p> 
        </div>
        <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
        </div>
        <div className="text-center mt-4 text-slate-500">
            {review.text}
        </div>
        <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
        </div>
        
        </div>
    )
}

export default Card;