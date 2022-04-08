import { SIGN_UP } from "../actions/types"

const initialState = {
  token: localStorage.getItem('token'),
}

const authReducer = (state = initialState,action) => {
  switch(action.type) {
    case SIGN_UP:
      console.log('welcome to the site');
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}

export default authReducer