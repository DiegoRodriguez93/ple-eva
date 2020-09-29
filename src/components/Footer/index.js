import React from 'react';
//import { useLocation, useHistory } from 'react-router-dom';
import  NextStep1 from './NextStep1';

export default function Footer() {

    //let history = useHistory();

    return (
        <div className="section-footer">
            <div className="col-6 left">
                <button onClick={() => console.log(document.getElementById('form'))}>Focus the input</button>
            </div>
            <div className="col-6 right">
                <button className="button-next" onClick={() => NextStep1()}>Siguiente {'>'}</button>
            </div>
        </div>
    )

}