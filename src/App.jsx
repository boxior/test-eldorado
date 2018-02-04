import React, {Component} from 'react';
import Donation from './Components/Donation/Donation';
import List from './Components/List/List';
import Home from "./Components/Home/Home";

class App extends Component {


    render() {
        return (
            <div className="wrapper">
                <Home/>
                <Donation/>
                <List/>
            </div>

        );
    }
}

export default App;