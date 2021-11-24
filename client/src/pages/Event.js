import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_EVENT } from '../utils/query';

function Event() {
  const { id } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_EVENT, {
    variables: { _id: id  }
  });

  if (loading) {
    return (
      <section id="single-event">
        <h2>LOADING...</h2>
      </section>
    )
  }

  const userData = data.event;

  const displayGallery = () => {
    if (userData.images.length === 3) {
      return <> 
          <img src={userData.images[2].url} alt="Garage sale" />
          <img src={userData.images[1].url} alt="Garage sale" />
        </>
    } else if (userData.images.length === 2) {
      return <img src={userData.images[1].url} alt="Garage sale" />
    }
  }

  return (
    <section id="single-event">
      {<h2>{userData.title}</h2>}
      {<h3>{userData.startTime} - {userData.endTime}</h3>}
      <div className="content-flex">
        <img src={userData.images[0].url} alt={userData.title} />
        <div className="text-container">
          <h3 class="host">
            Hosted by {userData.firstName} {userData.lastName}
          </h3>
          <h4>Description</h4>
          <p>{userData.description}</p>
        </div>
      </div>
      {userData.images[1] && 
      <div className="gallery">
        {displayGallery()}
      </div>}
    </section>
  )
}

export default Event;