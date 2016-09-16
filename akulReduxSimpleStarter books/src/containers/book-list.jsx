import React, {Component} from 'react';
//React-Redux connector:
import { connect } from 'react-redux';
//Our func which does a thing on book selected
import {selectBook} from '../actions/index';
//redux func
import { bindActionCreators } from 'redux';
//Note: this file is now a 'Container', so has access to app-state

class BookList extends Component {
  renderList() {
    //following 'books' gotten from return val of:
    //functin mapStatetoProps(props){}
    return this.props.books.map(book => {
      return(
        <li
          key={book.title}
          /*onClick passes clicked book to our selectBook func*/
          onClick={() => {
            console.log(this.props.selectBook, book);
            this.props.selectBook(book);
          }}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

/**
 * [mapStateToProps description]
 * @param  {object} state [app state from container]
 * @return {object}       [becomes params]
 * When app-state changes, this func re-assigns this.props, AND
 *   this container (BookList) re-rerenders
 */
function mapStateToProps(state) {
  return {
    books: state.books,

  }
}

//Just as mapStateToProps' return val is passed to props, so is return of this:
function mapDispatchToProps(dispatch) {
  // When selectBook (our func) is called, the result should be passed
  // thru to all of our reducers
  // following does that, we pass the above to our export statement
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//Promote BookList from a component to a container - pass it selectBook method,
//and make selectBook available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
