import React from 'react'
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItemConponent from './ListItemConponent'
import { Box } from '@mui/material';
const Thermography = () => {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <List sx={{ width: '70%', bgcolor: 'grey', mr: 3 }}>
      <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }}>
        <ListItemConponent Disease="breast cancer" />
      </Card>
      <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }}>
        <ListItemConponent Disease="diabetes neuropathy" />
      </Card>
    </List>
    </Box>
    )
}

export default Thermography