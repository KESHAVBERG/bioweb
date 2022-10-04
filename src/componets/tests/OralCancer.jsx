import React,{useState} from 'react'
import {Stack, Typography, Button} from '@mui/material';

const OralCancer = () => {
 const [state, setState] = useState({image:" "});

function handleImageChange(e) {
    setState({
      image: e.target.files[0]
    })

    console.log(state)
  };
  return (
    <Stack spacing={2} sx={{pl:"20px"}}>
       <Typography variant='h4' fontWeight="bold" sx={{}}>
            Oral Cancer
        </Typography> 
        <Typography variant='p' sx={{}}>
            Upload you image of Cancer in a .jpg format
        </Typography> 
        <input type="file" className="input-file" name="imgUpload" accept='.jpg' onChange={handleImageChange}/>


<Button>Sumbit</Button>
    </Stack>
  )
}

export default OralCancer