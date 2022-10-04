import React, { useState } from 'react'
import { Stack, Typography, Button } from '@mui/material';

const OralCancer = () => {
  const [state, setState] = useState({ image: " " });

  function handleImageChange(e) {
    setState({
      image: e.target.files[0]
    })

    console.log(state)
  };

  function handelSubmit(e) {
    e.preventDefault();
    let imgData = new FormData();

  }
  return (
    <Stack spacing={2} sx={{ pl: "20px" }}>
      <Typography variant='h4' fontWeight="bold" sx={{}}>
        Oral Cancer
      </Typography>
      <Typography variant='p' sx={{}}>
        Upload you image of Cancer in a .jpg format
      </Typography>
      <form onSubmit="">
        <input type="file" className="input-file" name="imgUpload" accept='.jpg' onChange={handleImageChange} />
        <br />
        <br />

        <input type="submit" style={{ color: "white", backgroundColor: "#157DEC", width: "150px", height: "30px", border: "none" }} />
      </form>


    </Stack>
  )
}

export default OralCancer