//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/Counter.jsx";

//render your react application

let contador = 0



setInterval((e) => {

    contador += 1;

    const seconds = contador.toString();  

    ReactDOM.render(<Counter seconds={seconds} />, document.querySelector("#app"));

}, 1000);

