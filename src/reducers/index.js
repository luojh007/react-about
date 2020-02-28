import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { contextAPI } from './contextAPI'
export default function createStore() {
  combineReducers({
    contextAPI:contextAPI,
    router: routerReducer  //将 reducer 声明到 store 里面的 router 键
  })
}