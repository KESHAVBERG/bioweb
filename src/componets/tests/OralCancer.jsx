import React from 'react'
import {Stack, Typography, Button} from '@mui/material';

const OralCancer = () => {
  return (
    <Stack spacing={2} sx={{pl:"20px"}}>
       <Typography variant='h4' fontWeight="bold" sx={{}}>
            Oral Cancer
        </Typography> 
        <Button variant="contained" style={{width:"200px"}}  sx={{ml:"20px"}}>upload your image</Button>
    </Stack>
  )
}

export default OralCancer