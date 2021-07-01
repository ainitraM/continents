import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ContinentList from './ContinentList.js';
import CountryList from './CountryList.js';

class App extends Component {
    render() {
        const span = <span> whatever your string </span>
        return (
            <BrowserRouter>
                <div className="container">
                    <Link to="/continents">CONTINENTS</Link>
                    <Switch>
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
