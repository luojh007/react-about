import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/app'
import "react-virtualized/styles.css"; // only needs to be imported once

class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <App />
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));