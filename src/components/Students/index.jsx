import React, { Component } from 'react';
import Hooks from '../Navbar';

export default class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: 'webbrain',
    };
  }

  render() {
    return (
      <div>
        <h1>Class Components</h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>

        <hr />
        <Hooks count={this.state.count} />
      </div>
    );
  }
}

// export default ClassComp;
