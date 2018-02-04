import React, {Component} from 'react';
import './DonationFooter.scss';

class DonationFooter extends Component {
    render() {
        return (
            <footer className="donation__footer">
                <div className="footer">
                    <button className="footer__save">Save fore later</button>
                    <button className="footer__tell">Tell your friends</button>
                </div>
            </footer>
        );
    }
}

export default DonationFooter;
