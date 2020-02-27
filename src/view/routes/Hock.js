import React, { Component, useState } from 'react'

export default class Hock extends Component {
  constructor(props){
    super();
  }
  Example() {
    const [count, setCount] = useState;
    return <div>
      <p>count</p>
      <button onClick={() => setCount(count + 1)}>
        点击加1
      </button>
    </div>
  }
  render() {
    return (
      <div>
        {this.Example()}
      </div>
    )
  }
}