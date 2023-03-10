import React from 'react'
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItemConponent from './ListItemConponent'
import { Box } from '@mui/material';
const Ossi = () => {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <List sx={{ width: '70%', bgcolor: 'grey', mr: 3 }}>
    <Card sx={{ mb: 2 }}>
      <ListItemConponent Disease="capsule endoscopy" />
    </Card>
    <Card sx={{ mb: 2 }}>
      <ListItemConponent Disease="OCT" />
    </Card>
    <Card sx={{ mb: 2 }}>
      <ListItemConponent Disease="fundus" />
    </Card>
    <Card sx={{ mb: 2 }}>
      <ListItemConponent Disease="melanoma (microscopic images)" />
    </Card>
  </List> 
  </Box> 
  )
}

export default Ossi