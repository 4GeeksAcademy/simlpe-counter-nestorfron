import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-regular-svg-icons'


//create your first component
const Counter = (props) => {
    const secondsPad = props.seconds.padStart(5, "0");
    const elementsArr = secondsPad.split("");

    return (
        <div className="container-fluid bg-dark py-3">
            <div className="row text-center text-light fs-1 m-5">
                <div className="bg-dark card col m-3 py-5 border border-4 border-opacity-10"><FontAwesomeIcon className="my-auto" icon={faClock} /></div>
                <div className="bg-dark card col m-3 py-5 border border-4 border-opacity-10">{elementsArr[0]}</div>
                <div className="bg-dark card col m-3 py-5 border border-4 border-opacity-10">{elementsArr[1]}</div>
                <div className="bg-dark card col m-3 py-5 border border-4 border-opacity-10">{elementsArr[2]}</div>
                <div className="bg-dark card col m-3 py-5 border border-4 border-opacity-10">{elementsArr[3]}</div>
                <div className="bg-dark card col m-3 py-5 border border-4 border-opacity-10">{elementsArr[4]}</div>
            </div>
        </div>
    );
}

export default Counter;

