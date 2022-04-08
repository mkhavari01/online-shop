import axios from "axios";
import { FETCH_CATEGORY, NEW_POST } from "./types";

export const fetchCategory = () => dispatch => {
  console.log('action fetch product is calling')
  axios.get(`${process.env.REACT_APP_BACKEND_URL}`+"/products").then((res)=>{
    console.log('res',res)
    dispatch({
      type : FETCH_CATEGORY,
      payload : res.data
    })
  }).catch((err)=>{
    console.log(err.message)
  })
}