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

import './index.css';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import Event from './pages/Event';
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
            <Route exact path="/" element={<Home/>} />
            <Route exact path='/events/:id' element={<Event/>} />
            <Route path="*" element={<NoMatch/>} />
          </Routes>
        </PageProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
