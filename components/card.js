import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {Typography} from "@mui/material";



const styles = {
        backgroundImage: `url(https://i.pinimg.com/564x/e2/b6/25/e2b625df8263d6c0779705e793b01268.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
};

export default function MediaCard() {
    return (
        <Card
            className="flex flex-col-reverse  hover:cursor-pointer hover:scale-20 transition-all duration-1000 ease-in-out transform hover:shadow-2xl rounded-lg"
            style={styles}
        >
            <CardActions  className="w-full flex-col  hover:text-white h-full duration-500 ease-in-out hover:bg-gray-900/20">
                <Button className="bg-gray-900/80 hover:bg-gray-900/80 rounded-sm text-white px-2 font-semibold" size="small">Share</Button>
                <Button className="bg-gray-900/80 hover:bg-gray-900/80 rounded-sm text-white px-2 font-semibold" size="small">Learn More</Button>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" className="opacity-0 hover:opacity-100 duration-500 ease-in-out" >
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardActions>
        </Card>
    );
}