import React from "react";
import ReactDOM from "react-dom/client";

// <p>Hello Vite</p>

const paragraphElement = React.createElement("p", null, "Hello Vite");

const headingElement = <h1>Hello React</h1>;
const buttonElement = <button>Click me</button>;

const HeaderComponent = () => {
  return (
    <div>
      <p>Deepika</p>
      <p>Deepika</p>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(HeaderComponent());//or
root.render(<HeaderComponent />);
//root.render(<HeaderComponent></HeaderComponent>);

//3 golden rules
//1.Always component start with capital letter
//2.Always component should return jsx
//3.Always a component should return only one element
