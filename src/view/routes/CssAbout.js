import React, { Component } from 'react'
import styles from "./cssabout.css";
//沿着原型链一直查找
function myInstanceof(left, right) {
  //只能判断对象
  if (typeof left === 'object' && left !== null) {
    let prototype = Object.getPrototypeOf(left);
    if (!prototype) {
      return false;
    }
    while (prototype) {
      if (prototype == right.prototype) {
        return true;
      }
      prototype = Object.getPrototypeOf(prototype);
    }
  } else {
    return false;
  }
}
console.log(myInstanceof("111", String)); //false
console.log(myInstanceof(new String("111"), String));//true
export default class CssAbout extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <>
        <div className={styles.ball}>

        </div>
      </>
    )
  }
}
