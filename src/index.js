import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './view/app'
import store from './store/index'
import GlobalContextProvider, { GlobalContext } from './GlobalContextProvider'
class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <Provider store={store}>
      <GlobalContextProvider>
        <GlobalContext.Consumer>
          {context =>
            <App globalContext={context} />
          }
        </GlobalContext.Consumer>
      </GlobalContextProvider>
    </Provider>
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));