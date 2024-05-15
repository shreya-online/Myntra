import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import loginImage from '../assets/img/loginBanner.jpeg'

function loginOrSignup(){
    return (
      <>
        <Card style={{ backgroundColor: "pink" }}>
          <Grid
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
            style={{ marginTop: "25px" }}
          >
            <Grid item xs={6}>
              <CardMedia
                component="img"
                height="170"
                src={loginImage}
                alt="loginImage"
              />
              {/* <img height= '150px'src={loginImage} alt='loginImage'/> */}
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom> <strong>Login</strong> or <strong>Signup</strong></Typography>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                    // id="outlined-adornment-weight"
                    startAdornment={<InputAdornment position="start">+91 | </InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                    // 'aria-label': 'weight',
                    }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Card>
      </>
    );

}

export default loginOrSignup;