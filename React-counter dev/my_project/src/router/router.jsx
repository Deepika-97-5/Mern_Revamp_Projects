import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout";
import Home from "../Pages/HomePage";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import ProductLayout from "../Components/ProductLayout";
import ProductDetail from "../Components/productDetail";
import Contact from "../Components/Contact";

const ContactPage= () =>{
    return(
        <>
        
        </>
    )
}

const Cart = () =>{
    return(
        <>
        </>
    )
}

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
              path:"/contact",
              element:<Contact/>
          },

          {
              path:"/cart",
              element:<Cart/>
          }

          

   ] ,
      errorElement:<ErrorPage/>
  },
   

])

export default router;