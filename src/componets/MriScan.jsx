import React from 'react'
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItemConponent from './ListItemConponent'

import { Link } from "react-router-dom";

const MriScan = () => {
  return (
    <List sx={{ width: '100%', bgcolor: 'grey', mr: 3 }}>
      <Card sx={{ mb: 2 }}>
        <ListItemConponent Disease="brain tumor basic- presence absence" />
      </Card>
      <Card sx={{ mb: 2 }}>
        <ListItemConponent Disease="brain tumor advanced- location based" />
      </Card>
      <Link to='/mri/oralcancer' className='link'>
        <Card sx={{ mb: 2 }}>
          <ListItemConponent Disease="oral cancer" />
        </Card>
      </Link>
      <Card sx={{ mb: 2 }}>
        <ListItemConponent Disease="breast cancer chemo treatment response" />
      </Card>
    </List>)
}

export default MriScan