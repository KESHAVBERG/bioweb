import React from 'react'
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItemConponent from './ListItemConponent'
import { Box } from '@mui/material';
const CtScan = () => {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <List sx={{ width: '70%', bgcolor: 'grey', mr: 3 }}>
      <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }}>
        <ListItemConponent Disease="lung cancer" />
      </Card>
      <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }}>
        <ListItemConponent Disease="COVID" />
      </Card>
      <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }}>
        <ListItemConponent Disease="kidney stone" />
      </Card>
    </List>
    </Box>
  )
}

export default CtScan