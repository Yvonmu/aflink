import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  userInfo: Cookies.get("userInfo")
    ? JSON.parse(JSON.stringify(Cookies.get("userInfo")))
    : null,
  info: Cookies.get("info")
    ? JSON.parse(JSON.stringify(Cookies.get("info")))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, info: action.payload };
    case "LOGOUT":
      return {
        ...state,
        info: null,
      };
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload };
    case "USER_LOGOUT":
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
