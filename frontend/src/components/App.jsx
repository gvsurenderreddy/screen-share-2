"use strict";

import React from 'react';

export default React.createClass({
  getInitialState() {
    return { open: false };
  },
  componentDidMount() {

  },
  handleClick() {
    this.setState({open: !this.state.open})
  },
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          test
        </button>
        {
          this.state.open ?
          <div>open</div> :
          <div>closed</div>
        }
      </div>
    );
  }
});
