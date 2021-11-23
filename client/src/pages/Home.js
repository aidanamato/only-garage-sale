import React from 'react';


import Post from '../components/Post';
import Search from '../components/Search/index';
import ActionAreaCard from '../components/Cards';


const Home = () => {
  return (
    <>
      <Search />
      <Post />
      <ActionAreaCard />
    </>
  );
};

export default Home;