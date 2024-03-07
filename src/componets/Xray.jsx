import React from 'react'
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

import ListItemConponent from './ListItemConponent'

const Xray = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <List sx={{ width: '70%', bgcolor: 'grey', mr: 3 }}>
        <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }}>
          <ListItemConponent Disease="pneumonia" />
        </Card>
        <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }}>
          <ListItemConponent Disease="tuberculosis" />
        </Card>

        <Link to='/xray/covid' className='link'>
          <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }}>
            <ListItemConponent Disease="COVID" />
          </Card>
        </Link>

        <Card sx={{ mb: 2, bgcolor: "#3C3C3C", color: "white" }}>
          <ListItemConponent Disease="knee osteoarthritis- KL grading" />
        </Card>
      </List>
    </Box>
  )
}

export default Xray