import React, { Component } from 'react'

export default class ClassComponet extends Component {

  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date() }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timberID = setInterval(() => this.tick(), 1000);

  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timberID);
  }


  tick() {
    this.setState({
      date: new Date()
    })
  }

  handleClick() {
    console.log('click');
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>Class Component</h1>
        <h2>{this.state.date.toLocaleTimeString}</h2>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
