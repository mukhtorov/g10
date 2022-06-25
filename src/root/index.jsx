import React, { Component } from 'react';
import Hooks from '../components/Navbar';
import Clas from '../components/Students';

export default class Root extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Clas />
        {/* <Hooks /> */}
      </div>
    );
  }
}
