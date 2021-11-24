import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../../utils/query';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
    <>
      {salesArr.map((sale) => (
        <Link to={`/events/${sale._id}`} key={sale._id}>
          <Card sx={{ margin: '15px', textAlign: 'center', }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={sale.images[0].url}
                alt={sale.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {sale.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {sale.startTime} - {sale.endTime}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {sale.location}
                </Typography>
                <Typography variant="body1" component="div">
                  {sale.tags.length >= 1 && displayTags(sale.tags)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> 
        </Link>
      ))}
    </>
  );
}

export default EventCard;