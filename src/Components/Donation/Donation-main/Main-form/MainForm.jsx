import React, {Component} from 'react';
import './MainForm.scss';

class MainForm extends Component {
    render() {
        return (
            <form action="" className="form" onSubmit={this.props.onSubmit}>
                <div className="form__field">
                    <input type="text" value={this.props.inputValue} onChange={this.props.onChangeInput} className="form__input"/>
                </div>
                <div className="form__field"><button type="submit" className="form__btn">Giv Now</button></div>
            </form>
        );
    }
}

export default MainForm;
