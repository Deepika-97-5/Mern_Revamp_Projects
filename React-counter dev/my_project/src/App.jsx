import ReactDOM from "react-dom/client";
import "../src/index.css";
import router from "./router/router";
import {useRoutes} from 'react-router-dom';
import {RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {router}/>);













