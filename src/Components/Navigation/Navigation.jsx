import React, {Component} from 'react';
import Donation from '../Donation/Donation';
import List from '../List/List';
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import './Navigation.scss';

const history = createBrowserHistory();

class Navigation extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="home">
                    <ul className="nav">
                        <li className="nav__item"><Link className="nav__list" to='/'>List</Link></li>
                        <li  className="nav__item"><Link className="nav__donate" to='/donation'>Donation</Link></li>
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