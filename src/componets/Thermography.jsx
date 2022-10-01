import React from 'react'
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItemConponent from './ListItemConponent'

const Thermography = () => {
  return (
    <List sx={{ width: '100%', bgcolor: 'grey', mr: 3 }}>
      <Card sx={{ mb: 2 }}>
        <ListItemConponent Disease="breast cancer" />
      </Card>
      <Card sx={{ mb: 2 }}>
        <ListItemConponent Disease="diabetes neuropathy" />
      </Card>
      <Card sx={{ mb: 2 }}>
        <ListItemConponent Disease="peripheral vascular disorders" />
      </Card>

    </List>
    )
}

export default Thermography