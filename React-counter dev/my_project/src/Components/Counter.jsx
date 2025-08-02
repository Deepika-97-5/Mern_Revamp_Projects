import { useState } from "react";
import ReactDOM from "react-dom/client";

const Counter = () => {
  //let value = 10;

  let [val, setVal] = useState(10);

  let [name, setName] = useState("Sam");

  let [valid, setValid] = useState(true);
  return (
    <>
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
};


//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Home />);

export default Counter;