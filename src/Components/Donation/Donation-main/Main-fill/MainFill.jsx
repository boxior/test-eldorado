import React, {Component} from 'react';
import './MainFill.scss';

class MainFill extends Component {

    render() {
        return (
            <div className="main__fill-wrapper">
                <div className="main__fill" style={{width: this.props.fill + '%'}}>

                </div>
            </div>

        );
    }
}

export default MainFill;
