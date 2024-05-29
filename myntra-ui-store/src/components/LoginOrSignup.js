import React from 'react';
import { Box, Button, Card, CardMedia, Grid, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import loginImage from '../assets/img/loginBanner.jpg'
import Header from '../components/Navbar/HeaderBar';



function loginOrSignup(){
    return (
      <>
      <Header />
        <Grid  display="flex" alignItems="center" justifyContent="center" style={{ backgroundColor: "#FFF3EC" }}>
          <Box component="span"  sx={{ display: "inline-block",  transform: "scale(0.8)" }} >
            <Card>
              <Grid  FlexDirection="column">
                <CardMedia component="img" minHeight="100vh" src={loginImage} alt="loginImage"/>
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
        </Grid>
        </>
    );
}

export default loginOrSignup;
