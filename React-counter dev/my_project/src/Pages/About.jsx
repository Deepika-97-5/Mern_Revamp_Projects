import{Link} from "react-router-dom";
const About = ()=>{
  return (

    <>
    <p>About Page</p>
    <a href = "/">
          <button>Go To Home Page</button>
    </a>

       <Link to = {"/"}>

              <button>Go To Home Page</button>       
       </Link>
  
    
    </>
  )
}

export default About;