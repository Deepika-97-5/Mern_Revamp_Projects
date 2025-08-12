import { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () =>{
    const [data,setData] = useState("Ram")

    const  handleChange = (newData) => {
        setData(newData);
    };
    return(
        <>
            <div className="border border-red-400">

            <div>ComponentA</div>

            <p>ComponentA:{data}</p>

            <ComponentB data={data} handleChange={handleChange}/>

            </div>
        </>
    )
}

export default ComponentA;