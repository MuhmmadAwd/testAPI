import axios from "axios";
import * as actionTypes from "../store/shopping-types";

export function getPosts() {
  return async function (dispatch) {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(data);
    dispatch({ type: "GetPosts", payload: data });
  };
}

export function addToCart(itemID) {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { id: itemID },
  };
}

export function removeFromCart(itemID) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: { id: itemID },
  };
}
