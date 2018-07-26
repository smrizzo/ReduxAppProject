import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?RIZZO1234';

export function fetchPost() {
   const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
   
   return {
      type: FETCH_POSTS,
      payload: request
   };
}