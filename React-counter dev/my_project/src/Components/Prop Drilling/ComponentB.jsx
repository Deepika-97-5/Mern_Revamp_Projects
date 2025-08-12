import ComponentC from "./ComponentC";


const ComponentB = ({data,handleChange}) =>{
    return(
        <>
            <div className="border border-red-400">

           <div>ComponentB</div>
            <p>ComponentB:{data}</p>

            <button onClick={()=>handleChange("Byee")}>Update</button>

            <ComponentC data ={data} />
            
            </div>
        </>
    )
}

export default ComponentB;