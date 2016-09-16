'use strict';
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  /**
   * does stuff when user enters values into search bar
   */
  handleSearch() {
    // console.log(this.state.term);
    this.props.makeApiReq(this.state.term);
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term} /* value is the val shown in text box as user types */
          onChange={event => {
            this.setState({ term: event.target.value });
            this.handleSearch();
          }} />
      </div>
    )
  }
};

export default SearchBar;
