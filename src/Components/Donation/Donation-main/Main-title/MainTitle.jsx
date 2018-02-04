import React, {Component} from 'react';
import './MainTitle.scss';

class MainTitle extends Component {
    render() {
        return (
            <div className="content__title"><span className="title-red">Only {this.props.lessDays} days left</span> to
                fund this project
            </div>
        );
    }
}

export default MainTitle;
