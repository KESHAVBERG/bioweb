import React, { useState } from "react";
import { Stack, Typography, Button, Box, Card } from '@mui/material';


const Covid = () => {

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

  const op = result.result ? result.result[0] * 100:0;
  const res = op?( op>98?`propbability of a COVID`:`This migh be a pnemonia`):'';

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

      body: form_data
    }

    fetch("https://farookheroes.pythonanywhere.com/predict/covid", options).then((res) => res.json()).then((data) => {
      setResult(data)
      console.log(data)
    }
    )


  }

    return (
        <Box height="100vh" width="100vw" alignContent="center" display="flex"
            justifyContent="center"
            alignItems="center" bgcolor="">
            <Card sx={{ p: 3, bgcolor: "" }}>
                <Stack spacing={2}>
                    <Typography variant='h4' fontWeight="bold" sx={{}}>
                        Covid
                    </Typography>
                    <Typography variant='p' sx={{}}>
                        Upload you image of Chest Xray in a .jpg format
                    </Typography>
                    <form onSubmit={handelSubmit} method="post">

            <input type="file" className="input-file" id='uploadImage'

             name="imgUpload" accept='.jpg' onChange={handleImageChange} />
            <br />
            <br />

            <input type="submit"  style={{ color: "white", backgroundColor: "#157DEC", width: "150px", height: "30px", border: "none" }} />
          </form>
          {res}
          {state.image === ""?<p></p>:<img id="uploadPreview" alt='' style={{height:"300px", width:"300px"}} />}
                </Stack>
            </Card>
        </Box>
    );
}


export default Covid;