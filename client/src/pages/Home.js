import React from 'react';


import Post from '../components/Post';
import Search from '../components/Search/index';
import EventCard from '../components/EventCard';


const Home = () => {
  return (
    <>
      <Search />
      <Post />
      <EventCard />
    </>
  );
};

export default Home;