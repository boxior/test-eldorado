import React, {Component} from 'react';
import './Donation.scss';
import DonationHeader from './Donation-header/DonationHeader'
import DonationMain from "./Donation-main/DonationMain";
import DonationFooter from "./Donation-footer/DonationFooter";

class Donation extends Component {
    constructor(props) {
        super(props);

        this.obj = {
            endPrice: 1000,
            price: 167,
            lessDays: 55,
            currentFill: 0,
            formInput: document.querySelector('.form__input'),
            formInputValue: 50
        };
        this.obj.currentFill = ((this.obj.endPrice - this.obj.price) / this.obj.endPrice * 100);

        this.state = {
            mounted: true,
            lessDays: this.obj.lessDays,
            price: this.obj.price,
            fill: this.obj.currentFill,
            formInputValue: this.obj.formInputValue
        };
    }

    getInputValue = (input) => {
        let inputValue = parseInt(input.value, 10);
        if (inputValue) {
            this.setState({formInputValue: inputValue});
        } else {
            this.setState({formInputValue: ""});
        }
        if (inputValue > this.state.price) {
            this.setState({formInputValue: this.state.price});
        }
        if (this.state.price === 0) {
            this.setState({formInputValue: ""});
            console.log(inputValue);
        }

    };

    setInputValueEnd = () => {
        if ((this.state.formInputValue * 2) > this.state.price) {
            this.setState({formInputValue: this.state.price - this.state.formInputValue});
        }
        if (this.state.price === this.state.formInputValue) {
            this.setState({formInputValue: ""});
        }
    };

    setPrice = () => {
        if (this.state.price < this.state.formInputValue) {
            this.setState({price: 0});
        } else {
            this.setState({price: this.state.price - this.state.formInputValue});
        }

    };

    onChangeInput = e => {
        this.getInputValue(e.target);
    };

    handleSubmit = e => {
        this.setState({mounted: false});
        this.setPrice();
        this.takeFill(this.state.formInputValue);
        this.getInputValue(document.querySelector('.form__input'));
        this.setInputValueEnd();
        e.preventDefault();

    };
    takeFill = (formInputValue) => {
        this.obj.currentFill = (this.obj.endPrice - (this.state.price - formInputValue)) / this.obj.endPrice * 100;
        this.setState({fill: this.obj.currentFill});
    };

    render() {
        return (
            <div className="donation">
                <DonationHeader price={this.state.price}/>
                <DonationMain onSubmit={this.handleSubmit} lessDays={this.state.lessDays} fill={this.state.fill}
                              inputValue={this.state.formInputValue} onChangeInput={this.onChangeInput}/>
                <DonationFooter />
            </div>
        );
    }
}

export default Donation;
