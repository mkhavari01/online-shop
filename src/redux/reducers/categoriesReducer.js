import { FETCH_CATEGORY, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
}

export default function categoriesReducer (state = initialState, action) {
  switch(action.type){
    case FETCH_CATEGORY:
      console.log('reducer is calling',action,state)
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}