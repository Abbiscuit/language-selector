import React, { Component } from 'react';
import LanguageContext from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';

class Button extends Component {
  renderSubmit(value) {
    if (value === 'English') {
      return 'Submit';
    } else if (value === 'Dutch') {
      return 'Voorleggan';
    } else {
      return '送信';
    }
  }

  renderButton(color) {
    return (
      <button
        className="btn waves-effect"
        style={{ backgroundColor: `${color}` }}
      >
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
