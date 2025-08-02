import Comment from "../Components/Comment";
import Counter from "../Components/Counter";
import { useState } from "react";
import { useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import ProductLayout from "../Components/ProductLayout"
import Footer from "../Components/Footer";


const Home = () => {

    const [count,setCount] = useState(10)

  useEffect(()=>{
    console.log("useEffect Executed")
    setCount[count+1] // Re-Render
    console.log(count)
    //fetchData()

  },[]);

  console.log(count)

  const fetchData = async ()=>{
    try{
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data.products)

    } catch(err){
      console.log()
    }
  }


  return (
    <>
     {/*<Counter />
     <Comment/>*/}
     <HeroSection/>
     <ProductLayout/>
     
    
    </>
  );
};

export default Home;