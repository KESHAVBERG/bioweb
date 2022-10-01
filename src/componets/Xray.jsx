import React from 'react'
import List from '@mui/material/List';
import Card from '@mui/material/Card';


import ListItemConponent from './ListItemConponent'

const Xray = () => {
  return (
    <List sx={{ width: '100%', bgcolor: 'grey', mr: 3 }}>
      <Card sx={{ mb: 2 }}>
        <ListItemConponent Disease="pneumonia" />
      </Card>
      <Card sx={{ mb: 2 }}>
        <ListItemConponent Disease="tuberculosis" />
      </Card>
      <Card sx={{ mb: 2 }}>
        <ListItemConponent Disease="COVID" />
      </Card>
      <Card sx={{ mb: 2 }}>
        <ListItemConponent Disease="knee osteoarthritis- KL grading" />
      </Card>
    </List>
  )
}

export default Xray