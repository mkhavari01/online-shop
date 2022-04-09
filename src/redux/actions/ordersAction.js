import axios from "axios";
import { FETCH_ORDERS } from "./types";

export const fetchOrders = (page, limit) => dispatch => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}` + `/orders?_page=${page}&_limit=${limit}`).then((res) => {
    console.log('res',res.data)
    dispatch({
      type: FETCH_ORDERS,
      payload: res.data
    })
  }).catch((err) => {
    console.log(err.message)
  })
}