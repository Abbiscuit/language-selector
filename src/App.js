import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';

import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header';

class App extends Component {
  state = {
    language: 'English'
  };

  componentDidMount() {
    M.AutoInit();
  }

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div>
            言語を選んでください:{' '}
            <span
              role="img"
              aria-label="english"
              onClick={() => this.onLanguageChange('English')}
              style={{
                cursor: 'pointer',
                margin: '0 5px'
              }}
            >
              🇺🇸
            </span>
            <span
              role="img"
              aria-label="dutch"
              onClick={() => this.onLanguageChange('Dutch')}
              style={{
                cursor: 'pointer',
                margin: '0 5px'
              }}
            >
              🇳🇱
            </span>
            <span
              role="img"
              aria-label="japanese"
              onClick={() => this.onLanguageChange('Japanese')}
              style={{
                cursor: 'pointer',
                margin: '0 5px'
              }}
            >
              🇯🇵
            </span>
          </div>

          <ColorContext.Provider value="orange">
            <LanguageContext.Provider value={this.state.language}>
              <UserCreate />
            </LanguageContext.Provider>
          </ColorContext.Provider>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
