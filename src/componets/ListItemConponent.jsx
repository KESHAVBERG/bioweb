import { IconButton, ListItem } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ListItemConponent = ({Disease}) => {
  return (
    <ListItem 

    secondaryAction={
      <IconButton>
        <ArrowForwardIosIcon/>
      </IconButton>
    }
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