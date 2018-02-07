import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Navigation from './Components/Navigation/Navigation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Navigation/>,
    document.getElementById("root")
);
registerServiceWorker();

