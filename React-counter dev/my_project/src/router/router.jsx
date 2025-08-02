import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout";
import Home from "../Pages/HomePage";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import ProductLayout from "../Components/ProductLayout";

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
              path:"/contact",
              element:<ContactPage/>
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