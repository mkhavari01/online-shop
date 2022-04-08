import { FETCH_CATEGORY } from "../actions/types";

const initialState = {
  allProducts: [],
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        allProducts: action.payload
      }
    default:
      return state
  }
}