import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import 'core-js/es6/map';
import 'core-js/es6/set';
import React, { Component } from 'react';

import CustomerReviewToolComponent from "./js/components/CustomerReviewToolComponent";

require('react-app-polyfill/ie11');

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomerReviewToolComponent />
      </div>
    );
  }
}

export default App;
