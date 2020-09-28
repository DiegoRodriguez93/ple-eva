import React, { useState, useEffect } from "react";
import {  useLocation, Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/';
import Footer from './components/Footer/';
import Title from './components/Title/';
import Step1 from './components/Step1/';

export default function App() {

    const [ path, setPath ] = useState('/')

    let location = useLocation();

    useEffect(() => {
      setPath(location.pathname);
    }, [location]);

    return (
        <div className="App">
            <Header path={path} />
            <div className="App-main">
                    <Title />
                    <Switch>
                    <Route exact path="/">
                        <Step1 />
                    </Route>
                    </Switch>
            </div>
            <Footer />
        </div>
    );
}
