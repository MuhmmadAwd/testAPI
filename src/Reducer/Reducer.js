import * as actionTypes from "../store/shopping-types";
const INITIAL_STATE = {
  posts: [],
  cart: [],
  currentItem: null,
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GetPosts":
      return { ...state, posts: action.payload };

    case actionTypes.ADD_TO_CART:
      const item = state.posts.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) => item.id === action.payload.id)
          : [...state.cart, { ...item }],
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
