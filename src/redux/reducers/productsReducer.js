import { FETCH_CATEGORY } from "../actions/types";

const initialState = []

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return [
        ...action.payload
      ]
    default:
      return state
  }
}