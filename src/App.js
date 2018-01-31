import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
            <div className="header">
                <div className="header__title">
                    $<output className="header__sum">167</output>&nbsp;still needed for this project
                </div>
            </div>

        </header>
          <article className="app__content.content"></article>
      </div>
    );
  }
}

export default App;
