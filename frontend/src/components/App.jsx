"use strict";

import React from 'react';

export default React.createClass({
  getInitialState() {
    return {streamURL: false};
  },
  componentWillMount() {
    // setup the socket
    // get other streams from server
  },
  handleClick() {
    const url = window.URL || window.webkitURL;
    navigator.getUserMedia = (
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia
    );
    navigator.getUserMedia({video:true, audio:false}, stream => {
      this.props.io.emit('start-stream', {data: 'test'});
      this.setState({
        streamURL: (url ? url.createObjectURL(stream) : stream)
      });
    }, error => console.error('get user media failed!', error));
  },
  handleSubmit(e) {
    e.preventDefault();
    console.log('test!');
  },
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Start Streaming</button>
        {
          this.state.streamURL &&
          <video src={this.state.streamURL} autoPlay />
        }
      </div>
    );
  }
});
