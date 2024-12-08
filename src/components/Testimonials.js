import React from "react";
import Card from "./Card";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const Testimonials = (props)=>{
    let reviews = props.reviews;
    const [index,setIndex]= useState(0);
    function leftShiftHandler(){
        if(index-1<0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index-1);
        }

    }
    function rightShiftHandler(){
        if(index + 1 >=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
        
    }
    
    return(
        <div className="w-[75vw] md:w-[500px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-100">
            <Card review={reviews[index]}></Card>
            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
            <button className="cursor-pointer hover:text-violet500" onClick={leftShiftHandler} >
            <IoIosArrowBack  />
            </button>
            <button className="cursor-pointer hover:text-violet500" onClick={rightShiftHandler}>
            <IoIosArrowForward />
            </button>
        </div>
        

        </div>
    )
}
export default Testimonials;