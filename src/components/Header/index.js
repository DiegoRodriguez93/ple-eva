import React from 'react';
import { useLocation } from 'react-router-dom';


export default function Header(props) {

    let location = useLocation();
    let path = location.pathname;

    return (
        <div className="App-header center-items">
            <div className="step-container center-items">
                <span style={path === '/' ? {backgroundColor:'Black'} : {} } className="step">1</span>
                <hr className="step-hr" />
                <span style={path === '/step2' ? {backgroundColor:'Black'} : {} } className="step">2</span>
                <hr className="step-hr" />
                <span className="step">3</span>
            </div>
        </div>
    )

}