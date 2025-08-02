import { useState } from "react";
import ReactDOM from "react-dom/client";

const Comment = () => {
  // let [name,setName] = useState();
  //let[message,setMessage] = useState();
  //console.log(name,message)

  //Object --> {name:"",message:""}
  const [data, setData] = useState({ name: "", meassage: "" });
  
  const [val,setVal] = useState([])
  return (
    <>
      <div className="flex flex-col gap-4">
        <p>Comment Components</p>
        <label>Name:</label>
        <input
          className="border border-black"                        //onChange={(e) => setData({ name: e.target.value })} -> direct method
          onChange={(e) => setData((prev)=>{
              return {...prev,name: e.target.value}
          })
        }          
        />

        <label>Message:</label>
        <textarea
          className="border border-black"
          onChange={(e) =>
            setData((prev) => {
              return { ...prev, message: e.target.value };
            })
          }
        />

      <button onClick={()=>setVal((prev)=>{
              return [...prev,data]
      })
      } >Submit</button> 

      
      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(val)}</p>
          

      </div>
    </>
  );
};

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Comment />);


export default Comment;
