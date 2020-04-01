import React, { Component } from 'react';
import LanguageContext from './contexts/LanguageContext';

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    let text;
    if (this.context === 'English') {
      text = 'Name';
    } else if (this.context === 'Dutch') {
      text = 'Naam';
    } else {
      text = '名前';
    }

    return (
      <div className="input-field">
        <label htmlFor="name">{text}</label>
        <input type="text" name="name" id="name" />
      </div>
    );
  }
}

export default Field;
