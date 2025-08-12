import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ShimmerPostList } from "react-shimmer-effects";
import useProduct from "../hooks/useProduct";





const ProductLayout = () => {
      const {data,loading} = useProduct()

      const productWithBrand = (Component) => {
        
        const EnhancedComponent = (Props) => {
          return(
            <div className="relative">
                 {Props.brand?(<p className="absolute top-0 left-0 mt-5 mx-5 p-2 bg-blue-200 text-white">
                    {Props.brand}</p>
                 ):(
                  ""
                 )}
                  <Component {...Props} />
            </div>
          )
        }
        
        return EnhancedComponent;
      };

      const ProductWithBrandWrapper = productWithBrand(ProductCard)
 
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
                <ProductWithBrandWrapper
                brand={items.brand}
                productId={items.id}
      productImage={items.thumbnail} 
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