import { Grid, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import xray from '../assests/xray.jpg';
import CT from '../assests/CT.jpg';
import MRI from '../assests/MRI.jpg';
import oosi from '../assests/oosi.jpg';
import thermography from '../assests/thermography.jpg'
import ultrasound from '../assests/ultrasound.jpg'
import { Link } from "react-router-dom";

import '../css/homestyle.css'
import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="grey"
      >
        <Grid sx={{ bgColor: " ", }} spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} container>
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 385, maxHeight:400, bgcolor: "#3C3C3C", color: "white" }}>
                    <CardMedia
                        component="img"
                        height={140}
                        image={xray}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Xray
                        </Typography>
                        <Typography variant="body2" color="">
                            X-rays are a type of radiation called electromagnetic waves.
                            X-ray imaging creates pictures of the inside of your body.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button>Select</Button> */}
                        <Link to="/xray" className='link'><Typography className='center'>select</Typography></Link>
                    </CardActions>
                </Card>
            </Grid>
            {/* CT Grid */}
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 385, maxHeight:400,bgcolor: "#3C3C3C", color: "white" }}>
                    <CardMedia
                        component="img"
                        height={140}
                        image={CT}
                    />
                    <CardContent sx={{ color: "white" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            CT
                        </Typography>
                        <Typography variant="body2">
                            A computerized tomography (CT) scan combines a series of X-ray images taken from
                            different angles around your body and uses computer
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/ct" className='link'>Select</Link>
                    </CardActions>
                </Card>
            </Grid>
            {/* ------------------------ */}
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 385,maxHeight:400, bgcolor: "#3C3C3C", color: "white" }}>
                    <CardMedia
                        component="img"
                        height={140}
                        image={MRI}
                    />
                    <CardContent sx={{ color: "white" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            MRI
                        </Typography>
                        <Typography variant="body2">
                            Magnetic resonance imaging is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/mri" className='link'>Select</Link>
                    </CardActions>
                </Card>
            </Grid>
            {/* ------------------------ */}

            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 385,maxHeight:400, bgcolor: "#3C3C3C", color: "white" }}>
                    <CardMedia
                        component="img"
                        height={140}
                        image={oosi}
                    />
                    <CardContent sx={{ color: "white" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Ossi
                        </Typography>
                        <Typography variant="body2">
                            Magnetic resonance imaging is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/ossi" className='link'>Select</Link>
                    </CardActions>
                </Card>
            </Grid>
            {/* ------------------------ */}

            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 385,maxHeight:400, bgcolor: "#3C3C3C", color: "white" }}>
                    <CardMedia
                        component="img"
                        height={140}
                        image={thermography}
                    />
                    <CardContent sx={{ color: "white" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Thermography
                        </Typography>
                        <Typography variant="body2">
                            Magnetic resonance imaging is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/thermograhy" className='link'>Select</Link>
                    </CardActions>
                </Card>
            </Grid>

            {/* ------------------------ */}

            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 385, maxHeight:400, bgcolor: "#3C3C3C", color: "white" }}>
                    <CardMedia
                        component="img"
                        height={140}
                        image={ultrasound}
                    />
                    <CardContent sx={{ color: "white" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            UltroSound
                        </Typography>
                        <Typography variant="body2">
                            Magnetic resonance imaging is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body.
                        </Typography>
                    </CardContent>
                    <CardActions className='' >
                        <Link to="/ultrasound" className='link center'>Select</Link>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
        </Box>
    )
}

export default Home