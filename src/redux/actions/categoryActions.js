import axios from "axios";
import { FETCH_CATEGORY, NEW_POST } from "./types";

export const fetchCategory = () => dispatch => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}` + "/products").then((res) => {
    dispatch({
      type: FETCH_CATEGORY,
      payload: res.data
    })
  }).catch((err) => {
    console.log(err.message)
  })
}