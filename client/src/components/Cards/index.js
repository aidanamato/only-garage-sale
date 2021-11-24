import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Link } from 'react-router-dom';

import photo from './assets/placeholder.jpg';

function ActionAreaCard() {
    const sales = [
        {
            id: '123232',
            title: 'Garage Sale Here',
            photo: photo,
            date: '12/25/2021',
            address: '255 Sum Ting Wong',
            tags: ['Electronics', ' / ', 'Furniture']
        },
        {
            id: '1233322',
            title: 'Other Garage Sale',
            photo: photo,
            date: '12/26/2021',
            address: '376 Something Else',
            tags: ['Furniture', ' / ', 'Arts and Crafts']
        },
        {
            id: '84930',
            title: 'Other Garage Sale',
            photo: photo,
            date: '12/26/2021',
            address: '376 Something Else',
            tags: ['Furniture', ' / ', 'Arts and Crafts']
        },
        {
            id: '4849393',
            title: 'Other Garage Sale',
            photo: photo,
            date: '12/26/2021',
            address: '376 Something Else',
            tags: ['Furniture', ' / ', 'Arts and Crafts']
        },
        {
            id: '12823292',
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
                <Link to={`/events/${sale.id}`} key={sale.id}>
                    <Card sx={{ margin: '15px', textAlign: 'center' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={sale.photo}
                                alt={sale.title}
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
                </Link>
            ))}
        </>
    );
}

export default ActionAreaCard;