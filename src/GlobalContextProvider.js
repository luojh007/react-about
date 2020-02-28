import React from 'react'
import { render } from "react-dom";
export const GlobalContext = React.createContext('dark');
export default class GlobalContextProvider extends React.Component {
  state = {
    theme: 'dark',
    author: 'ljh',
  }
  handleContextChange = action => {
    switch (action.type) {
      case 'UPDATE_THEME':
        return this.setState({
          theme: action.theme
        })
      default:
        return;
    }
  }
  render() {
    return <GlobalContext.Provider
      value={{
        dispatch: this.handleContextChange,
        theme: this.state.theme,
      }}
    >
      {this.props.children}
    </GlobalContext.Provider>
  }
}