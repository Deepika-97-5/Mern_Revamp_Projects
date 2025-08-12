import React, { useMemo } from "react";
import { useState } from "react";


const ExpensiveCard = () => {

    let [val, setVal] = useState(10);

    console.log("Started....")
            
              let [name, setName] = useState("Sam");
            
              let [valid, setValid] = useState(true);



    const ExpensiveValue = useMemo (() => {
        let total = 0;
        for(let i=0;i<1000;i++){
            total +=i 
        }

        return total + val;
    });          
            
              return (
                <>
                <p>{ExpensiveValue}</p>

                  <div className=" border border-red-800 py-10">
                    <p className=" text-2xl">Counter</p>
                    <p className="text-[38px]">{val}</p>
                    <div className="flex gap-2">
                      <button
                        className="py-2 px-6 rounded-lg bg-red-600"
                        onClick={() => {
                          //setVal (val - 1)
                          setVal((prev) => prev - 1);
                          console.log(val);
                        }}
                      >
                        -
                      </button>
                      <button
                        className="py-2 px-6 rounded-lg bg-green-600"
                        onClick={() => {
                          setVal(val + 1);
                          console.log(val);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
            
                  <div className="border border-red-800 py-10">
                    <p>{name}</p>
                    <div>
                      <button
                        className="py-2 px-6 rounded-lg bg-green-600"
                        onClick={() => {
                          setName("sandy");
                        }}
                      >
                        update
                      </button>
                    </div>
                  </div>
            
                  <div className="border border-red-800 py-10">
                    <p>{valid ? "true" : "false"}</p>
            
                    <div>
                      <button
                        className="py-2 px-6 rounded-lg bg-blue-800"
                        onClick={() => {
                          setValid(!valid);
                        }}
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </>
              );
        
    
}

export default ExpensiveCard;