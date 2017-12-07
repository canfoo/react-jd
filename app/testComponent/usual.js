import React, { Component } from 'react';
import simpleHoc from './simpleHoc';

@simpleHoc
class Usual extends Component {
  render() {
    console.log('usual', this.props);
    return (
      <div>
        <h2>usual-component</h2>
      </div>
    )
  }
}

export default Usual;
