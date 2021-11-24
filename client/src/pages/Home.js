import React from 'react';
import Auth from '../utils/auth';


import CreatePost from '../components/CreatePost';
import Search from '../components/Search/index';
import EventCard from '../components/EventCard';


const Home = () => {
  return (
    <>
      <Search />
      {Auth.loggedIn() && <CreatePost />}
      <EventCard />
    </>
  );
};

export default Home;