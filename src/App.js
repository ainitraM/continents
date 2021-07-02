import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ContinentList from './ContinentList.js';
import CountryList from './CountryList.js';
import Home from './Home.js';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="w-full">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/continents" component={ContinentList}/>
                        <Route exact path="/continents/:code" component={CountryList} />
                    </Switch>
                </div>
                <div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
