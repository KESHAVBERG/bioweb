import React from 'react'
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItemConponent from './ListItemConponent'
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Ossi = () => {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <List sx={{ width: '70%', bgcolor: 'grey', mr: 3 }}>
    <Link to='/ossi/capsuleendoscopy' className='link'>
    <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }}>
      <ListItemConponent Disease="capsule endoscopy" />
    </Card>
    </Link>
    <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }}>
      <ListItemConponent Disease="OCT" />
    </Card>
    <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }}>
      <ListItemConponent Disease="fundus" />
    </Card>
    <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }}>
      <ListItemConponent Disease="melanoma (microscopic images)" />
    </Card>
  </List> 
  </Box> 
  )
}

export default Ossi