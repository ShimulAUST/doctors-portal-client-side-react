import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import loginimg from '../../../images/login.png';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    const signInWithGoogleHandler = () => {
        signInWithGoogle(location, navigate);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1">
                        Login
                        <form onSubmit={handleLoginSubmit}>
                            <TextField id="standard-basic"
                                sx={{ width: "75%", m: 1 }}
                                label="Your Email"
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField id="standard-basic"
                                label="Your Password"
                                sx={{ width: "75%", m: 1 }}
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" />
                            <Button type="submit"
                                variant="contained"
                                sx={{ width: "75%", m: 1 }}
                            >Login</Button>
                            <NavLink to="/register"
                                style={{ textDecoration: "none" }}
                            > <Button type="submit"
                                variant="text"
                                sx={{ width: "75%", m: 1 }}
                            >New User? Please Register</Button></NavLink>

                        </form>
                        {
                            isLoading && <CircularProgress />
                        }
                        {
                            user?.email && <Alert severity="success">Login Successfully!!</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                        <p>--------------------------------------</p>
                        <Button variant="contained" onClick={signInWithGoogleHandler}
                            sx={{ width: "75%", m: 1 }}>Sign In Using Google</Button>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginimg} style={{ width: "100%" }} alt="" />
                </Grid>

            </Grid>
        </Container >
    );
};

export default Login;