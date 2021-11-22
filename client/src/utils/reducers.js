import { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SIGNUP_MODAL':
      return {
        ...state,
        signupModal: !state.signupModal
      }
    default:
      return state;
  }
};

export const usePageReducer = initialState => {
  return useReducer(reducer, initialState);
}