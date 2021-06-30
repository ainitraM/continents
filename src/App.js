import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ContinentList from './ContinentList.js';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Link to="/continents">CONTINENTS</Link>
                    <Switch>
                        <Route exact path="/continents" component={ContinentList}/>
                    </Switch>
                </div>
                <div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
