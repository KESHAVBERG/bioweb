import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Box, Typography, IconButton } from '@mui/material';
// import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Toolbar } from '@mui/material';
import TextField from '@mui/material/TextField';


const AppBarComponet = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar sx={{ bgcolor: "#3C3C3C", p: 1 ,justifyContent:"flex-end" }}>
                    <TextField
                        variant="outlined"
                        placeholder='Search'
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            ),
                            style: {
                                backgroundColor: "white",
                                borderRadius: "20px",
                                width:"250px",
                                height:"50px"
                            }
                        }}
                        style={{ color: 'white',}}

                    />
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Toolbar />

        </Box>
    )
}

export default AppBarComponet