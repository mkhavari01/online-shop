import axios from "axios";
import { SIGN_UP } from "./types";

export const signUp = (user) => dispatch => {
  console.log('action signup is calling')
  axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, user).then((res) => {
    console.log('res', res);
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: SIGN_UP,
      payload: res.data.token
    })
  }).catch((err) => {
    console.log("err", err)
  })
}