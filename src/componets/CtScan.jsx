import React from 'react'
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItemConponent from './ListItemConponent'

const CtScan = () => {
  return (
    <List sx={{ width: '100%', bgcolor: 'grey', mr: 3 }}>
      <Card sx={{ mb: 2 }}>
        <ListItemConponent Disease="lung cancer" />
      </Card>
      <Card sx={{ mb: 2 }}>
        <ListItemConponent Disease="COVID" />
      </Card>
      <Card sx={{ mb: 2 }}>
        <ListItemConponent Disease="kidney stone" />
      </Card>
    </List>
  )
}

export default CtScan