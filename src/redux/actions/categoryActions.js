import axios from "axios";
import { FETCH_CATEGORY, NEW_POST } from "./types";

export const fetchCategory = () => dispatch => {
  console.log('action is calling')
  axios.get('http://localhost:3000/products').then((res)=>{
    console.log('res',res)
    dispatch({
      type : FETCH_CATEGORY,
      payload : res.data
    })
  }).catch((err)=>{
    console.log(err.message)
  })
}