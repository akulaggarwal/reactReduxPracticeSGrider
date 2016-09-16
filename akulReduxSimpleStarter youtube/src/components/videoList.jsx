'use strict';
import React, { Component }from 'react';
import Video from './video.jsx'

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let vidElements = [];
    console.log(this.props.videoList);
    this.props.videoList.map(vid => {
      vidElements.push(vid.kind);
    })
    console.log('vidElements', vidElements);
    return (
      <div>
        {vidElements}
      </div>
    )
  }

}

export default VideoList;
