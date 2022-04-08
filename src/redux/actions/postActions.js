import axios from "axios";
import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  console.log('action is calling')
  axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    console.log('res',res)
    dispatch({
      type : FETCH_POSTS,
      payload : res.data
    })
  }).catch((err)=>{
    console.log(err.message)
  })
}