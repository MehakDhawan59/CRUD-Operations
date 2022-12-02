import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Header from "./Header";
import "./Login.css";
import Games from './Games';

const Login = ()=>{

    const navigate = useNavigate();

    const[loginFormData, setformData] = useState({
        username: "", 
        password: ""
      });

      const handleValueChanges = e => { 
        setformData({
          ...loginFormData,
          [e.target.name]: e.target.value,
        });
        //console.log(loginFormData)
      };

      const persistLogin = (loginFormData) => {
        localStorage.setItem('username', loginFormData.username);
        console.log("loginform", loginFormData);
      };

      const login =(e)=>{
        console.log("login", loginFormData.username);
        persistLogin(loginFormData);
        navigate('/games');
      }

    return(

                    <Box
                    display="flex"
                    flexDirection="column"
                    
                    minHeight="100vh"
                >
                    <Header />
                    <Box className="content">
                    <Stack spacing={2} className="form">
                    <h2 className="title">Login</h2>
                    <TextField
                        id="username"
                        label="username"
                        variant="outlined"
                        title="Username"
                        name="username"
                        placeholder="Enter Username"
                        fullWidth
                        onChange = {handleValueChanges}
                        //value = {enteredName}
                        />
                        <TextField
                        id="password"
                        variant="outlined"
                        label="password"
                        name="password"
                        type="password"
                        helperText="Password must be atleast 6 characters length"
                        fullWidth
                        placeholder="Enter a password with minimum 6 characters"
                        onChange = {handleValueChanges}
                        // value = {enteredPwd}
                        />
                         
                        <Button className="button" variant="contained" onClick = {login}>
                                LOGIN 
                        </Button>
                        
                    </Stack>
                    </Box>
                </Box>
                );
    
}

export default Login;