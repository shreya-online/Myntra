import React from 'react';
import { Box, Button, Card, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import loginImage from '../assets/img/loginBanner.jpg'
import AppBar from '@mui/material/AppBar';
// import AdbIcon from '@mui/icons-material/Adb';
import Toolbar from '@mui/material/Toolbar';


function loginOrSignup(){
    return (
      <>
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          </Toolbar>
          </Container>
      </AppBar>
        <div style={{ backgroundColor: "#FFF3EC" }}>
          <Box component="span"sx={{ display: "inline-block", mx: "500px", transform: "scale(0.8)" }} >
            <Card>
              <Grid container direction="column">
                <CardMedia component="img" height="190" src={loginImage} alt="loginImage"/>
                <Typography variant="h6" gutterBottom style={{margin: "50px 40px 15px"}}>
                  <strong>Login</strong> or <strong>Signup</strong>
                </Typography>
                <TextField style={{margin: "10px 40px"}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                    placeholder: "Mobile Number",
                  }} />
                <Typography gutterBottom style={{margin: "15px 40px"}}>
                  By continuing, I agree to the <strong>Terms of Use</strong> & <strong>Privacy Policy </strong>{" "}
                </Typography>
                <Button variant="contained" size="large" style={{ backgroundColor: "#FE3E7F", margin: "10px 40px" }}>
                  <strong>Continue</strong>
                </Button>
                <Typography gutterBottom style={{margin: "10px 40px 128px"}}>
                  Having trouble logging in? <strong>Get help</strong>{" "}
                </Typography>
              </Grid>
            </Card>
          </Box>
        </div>
        </>
    );
}

export default loginOrSignup;
