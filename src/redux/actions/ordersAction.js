import axios from "axios";
import { FETCH_ORDERS } from "./types";

export const fetchOrders = (page, limit,delivered) => dispatch => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}` + `/orders?_page=${page}&_limit=${limit}&delivered=${delivered}`).then((res) => {
    dispatch({
      type: FETCH_ORDERS,
      payload: res.data
    })
  }).catch((err) => {
    console.log(err.message)
  })
}