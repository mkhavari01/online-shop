import { FETCH_CATEGORY } from "../actions/types";

const initialState = {
  items: [],
  item: {},
}

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}