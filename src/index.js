import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/app'
class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <App />
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));