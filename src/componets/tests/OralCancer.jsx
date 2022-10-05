import React, { useState } from 'react'
import { Stack, Typography, Button } from '@mui/material';

const OralCancer = () => {
  const [state, setState] = useState({image:""});

  function handleImageChange(e) {
    setState({
      image: e.target.files[0]
    })
  };

  function handelSubmit(e) {
    e.preventDefault();
    let form_data = new FormData();
    console.log(state);
    form_data.append('image',state);
    const options = {
      mode: "no-cors",
      method:'POST',
      //   headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
      body: form_data
    }

    fetch("http://127.0.0.1:5000/predict/oral_cancer",options).then(res => {
      console.log(res.data);
    }).catch(e => console.log(e))


  }
  return (
    <Stack spacing={2} sx={{ pl: "20px" }}>
      <Typography variant='h4' fontWeight="bold" sx={{}}>
        Oral Cancer
      </Typography>
      <Typography variant='p' sx={{}}>
        Upload you image of Cancer in a .jpg format
      </Typography>
      <form onSubmit={handelSubmit}>
        <input type="file" className="input-file" name="imgUpload" accept='.jpg' onChange={handleImageChange} />
        <br />
        <br />

        <input type="submit" style={{ color: "white", backgroundColor: "#157DEC", width: "150px", height: "30px", border: "none" }} />
      </form>


    </Stack>
  )
}

export default OralCancer