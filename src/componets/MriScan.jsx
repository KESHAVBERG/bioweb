import React from 'react'
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItemConponent from './ListItemConponent'
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

const MriScan = () => {

  const navigate = useNavigate()
  function navigateTo(){
    navigate('/mri/oralcancer')
  }

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <List sx={{ width: '70%', bgcolor: 'grey', mr: 3 }}>
      <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }} >
        <ListItemConponent Disease="brain tumor basic- presence absence" />
      </Card>
      <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }} >
        <ListItemConponent Disease="brain tumor advanced- location based" />
      </Card>
      <Link to='/mri/oralcancer' className='link'>
        <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }} variant="outlined" >
          <ListItemConponent  
          Disease="oral cancer" />
        </Card>
      </Link>
      <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }} >
        <ListItemConponent Disease="breast cancer chemo treatment response" />
      </Card>
    </List>
    </Box>)
}

export default MriScan