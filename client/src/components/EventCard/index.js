import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../../utils/query';

import './index.css'

function EventCard() {
  const { loading, data } = useQuery(QUERY_EVENTS);
  
  if (loading) {
    return (
      <h2>LOADING...</h2>
    )
  }

  const salesArr = data?.events || [];
  console.log(salesArr);

  const displayTags = (tags) => {
    if (tags[2]) {
      return `Tags: ${tags[0].name} | ${tags[1].name} | ${tags[2].name}`;
    } else if (tags[1]) {
      return `Tags: ${tags[0].name} | ${tags[1].name}`;
    } else if (tags[0]) {
      return `Tags: ${tags[0].name}`;
    } else {
      return '';
    }
  }

  return (
    <section id="event-card-flex">
      {salesArr.map(sale => (
        <Link to={`/events/${sale._id}`} key={sale._id} style={{textDecoration: 'none'}}>
          <div className="event-card">
            <img className="card-img" src={sale.images[0] && sale.images[0].url} alt={sale.title} />
            <div className="event-text">
              <h2>{sale.title}</h2>
              <h3>{sale.startTime} - {sale.endTime}</h3>
              <p>{displayTags(sale.tags)}</p>
            </div>
          </div>
        </Link>
      ))}
    </section> 
  )
}

export default EventCard;