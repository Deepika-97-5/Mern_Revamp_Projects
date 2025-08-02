import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ShimmerPostList } from "react-shimmer-effects";



const ProductLayout = () => {

  const [data,setData] = useState([]);
  const[loading,setLoading] = useState(false);

  useEffect(()=>{
    fetchData();
  },[]);

  console.log(data)

  const fetchData = async () =>{
    try{
    
    setLoading(true);
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    setData(data.products);
    setLoading(false);

    }catch(err){
      console.log(err);
    }
  };
      if(loading){
        return <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />;

      }else{

         return(
            <>
              
              <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    {/* Heading & Filters */}
   
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">

      {
        data.map((items)=>{
          return (
            <>
                <ProductCard productImage={items.thumbnail} 
      productoffer={items.discountPercentage} 
      productTitle={items.title} rating={items.rating} 
      productRatingReview={items.stock} productPrice={items.price}/>
            </>
          )
        })
      }

      
     
    </div>
    
  </div>
  
</section>

            
            </>
        )

      }
 
       

}

export default ProductLayout;