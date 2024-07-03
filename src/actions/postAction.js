import { FETCH_BUTTON_CLICKED, SELECT_POST } from "./types";
import axios from "axios";

// export function fetchPosts() {
//   return function (dispatch) {
//     axios.get("https://api.websl.lk/api/student").then((res) => {
//       dispatch({
//         type: FETCH_BUTTON_CLICKED,
//         payload: res.data,
//       });
//     });
//   };
// }

export const fetchPosts = () => (dispatch) => {
  axios.get("https://api.websl.lk/api/student").then((res) => {
    dispatch({
      type: FETCH_BUTTON_CLICKED,
      payload: res.data,
    });
  });
};

export const selectPost = (post) => {
  return {
    type: SELECT_POST,
    payload: post,
  };
};
