import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
   componentDidMount() {
      this.props.fetchPosts();
   }


   render() {
      return (
         <div>
            Post Index
         </div>
      );
   }
}
//instead of maptodispatch and creating separeate function we are
//just letting connect handle this for us
//but if we wanted to make some specific computations for the action creator
//then we would want to create a separeate function to handle that
export default connect( null , { fetchPosts })(PostsIndex);