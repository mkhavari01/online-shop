import axios from "axios";
import { FETCH_PRODUCTS, NEW_POST } from "./types";

export const fetchProducts = (page, limit) => dispatch => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}` + `/products?_page=${page}&_limit=${limit}`).then((res) => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data
    })
  }).catch((err) => {
    console.log(err.message)
  })
}