import React, { useState } from 'react'
import { Stack, Typography, Button } from '@mui/material';

const OralCancer = () => {
  const [state, setState] = useState({ image: "" });

  const [result, setResult] = useState([]);
  function handleImageChange(e) {
    setState({
      image: e.target.files[0]
    })
  };

  const op = result.result? `${result.result[0]*100}% of chance of cancer`:"";

  function handelSubmit(e) {
    e.preventDefault();
    let form_data = new FormData();
    var imagedata = document.querySelector('input[type="file"]').files[0];

    console.log("submit clicked");
    console.log(imagedata);

    form_data.append('image', imagedata);
    console.log(form_data.get('image'))
    const options = {
      // mode: "no-cors",
      method: 'POST',
      //   headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
      body: form_data
    }

    fetch("http://127.0.0.1:5000/predict/oral_cancer", options).then((res) => res.json()).then((data) => {
      setResult(data)
      console.log(result.result)
    }
    )


  }



  return (
    <Stack spacing={2} sx={{pl:{lg:"130px", xs:"20px"} }}>
      <Typography variant='h4' fontWeight="bold" sx={{}}>
        Oral Cancer
      </Typography>
      <Typography variant='p' sx={{}}>
        Upload you image of Cancer in a .jpg format
      </Typography>
      <form onSubmit={handelSubmit} method="post">
        <input type="file" className="input-file" name="imgUpload" accept='.jpg' onChange={handleImageChange} />
        <br />
        <br />

        <input type="submit" style={{ color: "white", backgroundColor: "#157DEC", width: "150px", height: "30px", border: "none" }} />
      </form>
      <br />

      {op}
      {/* <p>{result.result * 100}% change of a cancer</p> */}

    </Stack>
  )
}

export default OralCancer