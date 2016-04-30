"use strict";

import React from 'react';

export default React.createClass({
  getInitialState() {
    return {streamURL: false};
  },
  componentWillMount() {
    const url = window.URL || window.webkitURL;
    navigator.getUserMedia = (
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia
    );
    navigator.getUserMedia({video:true, audio:false}, stream => {
      this.setState({
        streamURL: (url ? url.createObjectURL(stream) : stream)
      });
    }, error => console.error('get user media failed!', error));
  },
  handleClick() {
    this.setState({open: !this.state.open})
  },
  render() {
    return (
      <div>
        <video
          src={this.state.streamURL}
          autoPlay />
      </div>
    );
  }
});
