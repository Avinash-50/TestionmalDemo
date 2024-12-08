import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";


const App = () => {
  return <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
    <div className="text-center">
    <h1 className="text-4xl font-bold">Testimonials</h1>
    
      <Testimonials reviews={reviews}/>
    </div>
  </div>;
};

export default App;
