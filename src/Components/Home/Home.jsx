import React, {Component} from 'react';
import './Home.scss';
// import ListItems from "./List-items/ListItems";

class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="nav">
                    <a href="#" className="nav__list">
                        Show list of songs
                    </a>
                    <a href="#" className="nav__donate">
                        Show donate
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;