import React, {Component} from 'react';
import './DonationHeader.scss';

class DonationHeader extends Component {

    render() {
        return (
            <header className="donation__header">
                <div className="header">
                    <div className="header__title">
                        $
                        <output className="header__sum">{this.props.price}</output>
                        &nbsp;still needed for this project
                    </div>
                </div>
            </header>
        );
    }
}

export default DonationHeader;
