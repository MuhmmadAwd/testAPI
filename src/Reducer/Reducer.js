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
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
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
