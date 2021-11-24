import React from 'react';


import CreatePost from '../components/CreatePost';
import Search from '../components/Search/index';
import EventCard from '../components/EventCard';


const Home = () => {
  return (
    <>
      <Search />
      <CreatePost />
      <EventCard />
    </>
  );
};

export default Home;