import { IconButton, ListItem } from '@mui/material'
import React from 'react'
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ListItemConponent = ({ Disease }) => {
  return (

    <ListItem
    >

      <ListItemText
        primary={
          <React.Fragment>
            <Typography sx={{ textTransform: 'capitalize', fontSize: '25px' }}>
              {Disease}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  )
}

export default ListItemConponent