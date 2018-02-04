import React, {Component} from 'react';
import './DonationMain.scss';
import MainFill from "./Main-fill/MainFill";
import MainForm from "./Main-form/MainForm";
import MainTitle from "./Main-title/MainTitle";
import MainDesc from "./Main-desc/MainDesc";
import MainWhy from "./Main-why/MainWhy";

class DonationMain extends Component {

    render() {
        return (
            <main className="donation__main">
                <div className="main">
                    <MainFill fill={this.props.fill}/>
                    <div className="main__content">
                        <div className="content">
                            <MainTitle lessDays={this.props.lessDays}/>
                            <MainDesc/>
                            <div className="content__paid">
                                <MainForm onSubmit={this.props.onSubmit} inputValue={this.props.inputValue} onChangeInput={this.props.onChangeInput}/>
                            </div>
                            <MainWhy/>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default DonationMain;
