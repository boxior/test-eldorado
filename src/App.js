import React, {Component} from 'react';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="app__header">
                    <div className="header">
                        <div className="header__title">
                            $
                            <output className="header__sum">167</output>
                            &nbsp;still needed for this project
                        </div>
                    </div>
                </header>
                <main className="app__main">
                    <div className="main">
                        <div className="main__fill"></div>
                        <div className="main__content">
                            <div className="content">
                                <div className="content__title"><span className="title-red">Only 3 days left</span> to
                                    fund this project
                                </div>
                                <div className="content__desc">Join the <b>42</b> others donors who have already
                                    supported this project. Every dollar help
                                </div>
                                <div className="content__paid">
                                    <form action="" className="form">
                                        <div className="form__field"><input type="text" defaultValue={50} className="form__input"/></div>
                                        <div className="form__field"><button type="submit" className="form__btn">Giv Now</button></div>
                                    </form>
                                </div>
                                <div className="content__why">
                                    <a href="" className="link">Why giv 50$?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="app__footer">
                    <div className="footer">
                        <button className="footer__save">Save fore later</button>
                        <button className="footer__tell">Tell your friends</button>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
