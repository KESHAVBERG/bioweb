import React, { useState } from 'react'
import { Stack, Typography, Button, Box, Card } from '@mui/material';

const OralCancer = () => {
  const [state, setState] = useState({ image: "" });

  const [result, setResult] = useState([]);

  function handleImageChange(e) {
    setState({
      image: e.target.files[0]
    });
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
      document.getElementById("uploadPreview").src = oFREvent.target.result;
    };

  };


  const op = result.result ? `${result.result[0] * 100}% of chance of cancer` : "";

  function handelSubmit(e) {
    e.preventDefault();
    let form_data = new FormData();
    var imagedata = document.querySelector('input[type="file"]').files[0];

    console.log("submit clicked");

    form_data.append('image', imagedata);
    console.log(form_data.get('image'))
    const options = {
      // mode: "no-cors",
      method: 'POST',

      body: form_data
    }

    fetch("https://farookheroes.pythonanywhere.com/predict/oral_cancer", options).then((res) => res.json()).then((data) => {
      setResult(data)
      console.log(`THE RESULT ${result}`)
    }
    )


  }



  return (
    <div > <div style={{ textAlign: 'center', fontSize: "30px", color: 'white', paddingTop: "200px", fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif', letterSpacing: '7px' }}>Upload Your Scans</div>
      <Box alignContent="center" display="flex"
        justifyContent="center"
        alignItems="center" bgcolor="" paddingTop={"40px"}>
        <Card sx={{ p: 3, bgcolor: "#1A284B", color: 'white', fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif' }}>
          <Stack spacing={2}>
            <Typography variant='h4' fontWeight="bold" sx={{}}>
              Oral Cancer
            </Typography>
            <Typography variant='p' sx={{}}>
              Upload you image of Cancer in a .jpg format
            </Typography>
            <form onSubmit={handelSubmit} method="post">
              <input type="file" className="input-file" id='uploadImage'

                name="imgUpload" accept='.jpg' onChange={handleImageChange} />
              <br />
              <br />

              <input type="submit" style={{ color: "white", backgroundColor: "#157DEC", width: "150px", height: "30px", border: "none" }} />
            </form>
            <br />

            {op}
            {/* <p>{result.result * 100}% change of a cancer</p> */}
            {state.image === "" ? <p></p> : <img id="uploadPreview" alt='' style={{ height: "300px", width: "300px" }} />}

          </Stack>
        </Card>
      </Box>
    </div>
  )
}

export default OralCancer