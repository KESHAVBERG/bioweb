import { Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import xray from '../assests/xray.jpg';
import CT from '../assests/CT.jpg';
import MRI from '../assests/MRI.jpg';
import oosi from '../assests/oosi.jpg';
import thermography from '../assests/thermography.jpg';
import ultrasound from '../assests/ultrasound.jpg';
import { Link } from "react-router-dom";
import '../css/homestyle.css';
import { Box } from '@mui/material';
import { HiArrowSmRight } from "react-icons/hi";


const Home = () => {
    const cards = [
        {
            image: xray,
            title: "Xray",
            description: "X-rays are a type of radiation called electromagnetic waves. X-ray imaging creates pictures of the inside of your body."
        },
        {
            image: CT,
            title: "CT",
            description: "A computerized tomography (CT) scan combines a series of X-ray images taken from different angles around your body and uses computer."
        },
        {
            image: MRI,
            title: "MRI",
            description: "Magnetic resonance imaging is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body."
        },
        {
            image: oosi,
            title: "Ossi",
            description: "Magnetic resonance imaging is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body."
        },
        {
            image: thermography,
            title: "Thermography",
            description: "Magnetic resonance imaging is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body."
        },
        {
            image: ultrasound,
            title: "Ultrasound",
            description: "Magnetic resonance imaging is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body."
        }
    ];

    return (
        <div className='homepage'>
            <p style={{ color: 'white', fontSize: "40px", textAlign: 'center', fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif' }}>
                CHOOSE YOUR CATEGORY
            </p>
            <Box
                display="flex"
                flexDirection={'row'}
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                bgcolor="#041134"
                borderRadius={'200px'}
            >

                <Grid sx={{ bgColor: " ", }} className='grid'>
                    {cards.map((card, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Card sx={{ maxWidth: 385, maxHeight: 400, bgcolor: "#1A284B", color: "white" }} className='card'>
                                <CardMedia
                                    component="img"
                                    height={140}
                                    image={card.image}
                                    className='image'
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={`/${card.title.toLowerCase()}`} className='link'><Typography className='center' display={'flex'} marginLeft={"9px"}>Select <HiArrowSmRight style={{ marginLeft: '10px', fontSize: '25px' }} /> </Typography></Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div >
    );
}

export default Home;
