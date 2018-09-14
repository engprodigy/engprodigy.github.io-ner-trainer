//'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
//import Tokenizer from 'react-tokenizer';
import Tokenizer from './Tokenizer'
import TokenCell from './TokenCell';
import registerServiceWorker from './registerServiceWorker';
var createReactClass = require('create-react-class');

//let App = React.createClass({
export default createReactClass({
  getInitialState() {
    return { tokens: [] }
  },

  render() {
    return (
      <section className="app">
        <Tokenizer
          tokens={this.state.tokens}
          tokenize={this._tokenize}
          removeToken={this._removeToken} />
      </section>
    );
  },

  _tokenize(data) {
    let tokens = this.state.tokens;

    if (Array.isArray(data)) {
      tokens = tokens.concat(data)
    } else {
      tokens.push(data);
    }

    this.setState({ tokens: tokens });
  },

  _removeToken(token) {
    let tokens = this.state.tokens,
        index  = tokens.indexOf(token);

    if (index !== -1) {
      tokens.splice(index, 1);
    }

    this.setState({ tokens: tokens });
  }

});

//ReactDOM.render(<App />, document.getElementById('app'));
//registerServiceWorker();