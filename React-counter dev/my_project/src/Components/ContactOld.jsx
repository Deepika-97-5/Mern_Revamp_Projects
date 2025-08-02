import {useState} from "react";

const Contact = () =>{
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [message,setMessage] = useState();
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    console.log(name,email,message)
    return(
        <>
                <form onSubmit={handleSubmit}>
                <p>Contact Form</p>

                <label htmlFor="name">Name</label>
                <input id="name"  onChange={(e)=>{
                    setName(e.target.value)
                }}/>  

                <label htmlFor="name">Email</label>
                <input id="email" onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>

                <label htmlFor="meassage">Name</label>
                <input id="message" onChange={(e)=>{
                    setMessage(e.target.value)
                }}/>  

                <button type="submit">Send</button>
            </form>
        </>
    )
}

export default Contact;