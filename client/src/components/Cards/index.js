import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import photo from './assets/placeholder.jpg';

function ActionAreaCard() {
    const sales = [
        {
            title: 'Garage Sale Here',
            photo: photo,
            date: '12/25/2021',
            address: '255 Sum Ting Wong',
            tags: ['Electronics', ' / ', 'Furniture']
        },
        {
            title: 'Other Garage Sale',
            photo: photo,
            date: '12/26/2021',
            address: '376 Something Else',
            tags: ['Furniture', ' / ', 'Arts and Crafts']
        },
        {
            title: 'Other Garage Sale',
            photo: photo,
            date: '12/26/2021',
            address: '376 Something Else',
            tags: ['Furniture', ' / ', 'Arts and Crafts']
        },
        {
            title: 'Other Garage Sale',
            photo: photo,
            date: '12/26/2021',
            address: '376 Something Else',
            tags: ['Furniture', ' / ', 'Arts and Crafts']
        },
        {
            title: 'Other Garage Sale',
            photo: photo,
            date: '12/26/2021',
            address: '376 Something Else',
            tags: ['Furniture', ' / ', 'Arts and Crafts']
        }
    ]

  return (
    <>
        {sales.map((sale) => (
            <Card sx={{ margin: '15px', textAlign: 'center' }} key={sale.title}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={sale.photo}
                        alt="placeholder"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {sale.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {sale.date}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {sale.address}
                        </Typography>
                        <Typography variant="body1" component="div">
                            {sale.tags}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card> 
        ))}
    </>
  );
}

export default ActionAreaCard;