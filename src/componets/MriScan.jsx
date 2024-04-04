import React from 'react'
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItemConponent from './ListItemConponent'
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";


const MriScan = () => {

  const navigate = useNavigate()
  function navigateTo() {
    navigate('/mri/oralcancer')
  }

  return (
    <div>
      <p style={{ color: 'white', fontSize: "40px", textAlign: 'center', fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif', paddingTop: "70px", letterSpacing: '10px' }}>
        CHOOSE YOUR DIAGNOSIS
      </p>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={"50px"}
      >
        <List sx={{ width: '70%', bgcolor: '', mr: 3 }}>
          <Card sx={{ mb: 2, bgcolor: "#1A284B", color: "white" }} >

          </Card>
          <Card sx={{ mb: 2, bgcolor: "#1A284B", color: "white", display: 'flex' }}>
            <ListItemConponent Disease="brain tumor basic- presence absence" />
            <div><HiArrowSmRight style={{ paddingTop: '20px', fontSize: '25px', paddingRight: '20px' }} /> </div>
          </Card>

          <Card sx={{ mb: 2, bgcolor: "#1A284B", color: "white", display: 'flex' }}>
            <ListItemConponent Disease="brain tumor advanced- location based" />
            <div><HiArrowSmRight style={{ paddingTop: '20px', fontSize: '25px', paddingRight: '20px' }} /> </div>
          </Card>
          <Link to='/mri/oralcancer' className='link'>

            <Card sx={{ mb: 2, bgcolor: "#1A284B", color: "white", display: 'flex' }}>
              <ListItemConponent Disease="Oral Cancer" />
              <div><HiArrowSmRight style={{ paddingTop: '20px', fontSize: '25px', paddingRight: '20px' }} /> </div>
            </Card>
          </Link>
          <Card sx={{ mb: 2, bgcolor: "#1A284B", color: "white", display: 'flex' }}>
            <ListItemConponent Disease="breast cancer chemo treatment response" />

            <div><HiArrowSmRight style={{ paddingTop: '20px', fontSize: '25px', paddingRight: '20px' }} /> </div>
          </Card>

        </List>
      </Box>
    </div>
  )
}

export default MriScan



