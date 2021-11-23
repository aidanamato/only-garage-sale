import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { PageProvider } from './utils/GlobalState';

import './App.css';

// components
import Navbar from './components/Navbar';

// pages
import Search from './components/Search/Search';
import Login from './pages/Login';
import Settings from './pages/Settings';
import NoMatch from './pages/NoMatch';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <PageProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Search/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/settings" element={<Settings/>} />
            <Route path="*" element={<NoMatch/>} />
          </Routes>
        </PageProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
