import React from 'react'
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItemConponent from './ListItemConponent'

const Ossi = () => {
  return (
    <List sx={{ width: '100%', bgcolor: 'grey', mr: 3 }}>
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
  )
}

export default Ossi