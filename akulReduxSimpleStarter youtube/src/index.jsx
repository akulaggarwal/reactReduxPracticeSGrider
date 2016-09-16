'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar.jsx';
import VideoList from './components/videoList.jsx';


const API_KEY = 'AIzaSyAfHO5Ew9U45wVyI2tfuPnDlDIJFYPG_DM';

// YTSearch({key: API_KEY, term: 'surfboards'}, data => console.log(data));

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        term: 'initial term',
        videoList: []};

      this.makeApiReq = this.makeApiReq.bind(this);
  }

  makeApiReq(term) {
    this.setState ({
      term
    })
    YTSearch({key: API_KEY, term: this.state.term}, data => {
      console.log(data);
      this.setState ({videoList: data});
      console.log(this.state.term);
    });
  }

  render() {
    return (
      <div>
        <SearchBar makeApiReq={this.makeApiReq} />
        <VideoList videoList={this.state.videoList} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
