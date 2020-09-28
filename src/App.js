import React from "react";
import './App.scss';

import Header from './components/Header/'
import Footer from './components/Footer/'
import Title from './components/Title/'
import Step1 from './components/Step1/'

export default function App() {
    return (
        <div className="App">
            <Header />
            <div className="App-main">
                <Title />
                <Step1 />
            </div>
            <Footer />
        </div>
    );
}
