import {Outlet} from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductLayout from "../Components/ProductLayout";

const AppLayout = ()=>{
    return(
      <>
        <Header/>
        <Outlet/>
        <Footer/>
                                                                                                                              
        

       </> 
    )
}

export default AppLayout;