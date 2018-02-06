import React, {Component} from 'react';
import Donation from '../Donation/Donation';
import List from '../List/List';
import {Router, Route, NavLink} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import './Navigation.scss';

const history = createBrowserHistory();

class Navigation extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="home container">
                    <ul className="nav">
                        <li className="nav__item"><NavLink exact activeClassName="nav--active" className="nav__list"
                                                           to='/'>Show list of songs</NavLink></li>
                        <li className="nav__item"><NavLink activeClassName="nav--active" className="nav__donate"
                                                           to='/donation'>Show donation</NavLink></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={List}/>
                    <Route path="/donation" component={Donation}/>
                </div>
            </Router>
        )
    }
}

export default Navigation;