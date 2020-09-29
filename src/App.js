import React from "react";
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css'

import Header from './components/Header/';
import Footer from './components/Footer/';
import Title from './components/Title/';
import Step1 from './components/Step1/';
import Step2 from './components/Step2/';

export default function App() {

    /*     const [ path, setPath ] = useState('/')
    
        let location = useLocation();
    
        useEffect(() => {
          setPath(location.pathname);
        }, [location]); */

    return (
        <div className="App">
            <Header />
            <Title />
            <Switch>
                <Route exact path="/">
                    <Step1 />
                </Route>
                <Route exact path="/step2">
                    <Step2 />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}
