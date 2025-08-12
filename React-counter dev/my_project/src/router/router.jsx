import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout";
import Home from "../Pages/HomePage";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import ProductLayout from "../Components/ProductLayout"
import ProductDetail from "../Components/productDetail";
//import Contact from "../Pages/Contact";
import ImageCard from "../Components/ImageCard";
import Cart from "../Pages/Cart"
import { lazy,Suspense } from "react";
import ExpensiveCard from "../Components/ExpensiveCard";
import ComponentA from "../Components/Prop Drilling/ComponentA";


const Contact = lazy(()=> import("../Pages/Contact"))


const router = createBrowserRouter([

  {
      path : "/",
      element : <AppLayout/>,
      children : [
          {
              path:"/",
              element: <Home/>

          },

          {
              path: "/about",
              element: <About/>
          } ,   
          
          {
              path:"/products",
              element: <ProductLayout/>

          } ,

          {
              path: "/products/:id",
              element: <ProductDetail/>  
            
          },

          {
              path: "/contact",
                element: (
                    <Suspense fallback={"Loading..."}>
                        <Contact/>
                    </Suspense>
                )
        
          },

          {
              path:"/cart",
              element:<Cart/>
          },

          {
              path:"/image-component",
              element:<ImageCard/>
          },
          {
              path: "/use-memo",
              element:<ExpensiveCard/>,
          },
          {
              path:"/prop-drilling",
              element:<ComponentA/>,
          },

          

   ] ,
      errorElement:<ErrorPage/>
  },
   

])

export default router;