import React, { createContext, useContext } from 'react';
import { usePageReducer } from './reducers';

const PageContext = createContext();
const { Provider } = PageContext;

const PageProvider = ({value = [], ...props}) => {
  const [state, dispatch] = usePageReducer({
    signupModal: false,
    loginModal: false
  });

  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const usePageContext = () => {
  return useContext(PageContext);
}

export { PageProvider, usePageContext };