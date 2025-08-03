import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout";
import Home from "../Pages/HomePage";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import ProductLayout from "../Components/ProductLayout"
import ProductDetail from "../Components/productDetail";
import Contact from "../Pages/Contact";
import ImageCard from "../Components/ImageCard";
import Cart from "../Pages/Cart"





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
          },

          {
              path:"/image-component",
              element:<ImageCard/>
          }

          

   ] ,
      errorElement:<ErrorPage/>
  },
   

])

export default router;