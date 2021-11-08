import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import loginimg from '../../../images/login.png';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1">
                        Register
                        {!isLoading &&
                            <form onSubmit={handleLoginSubmit}>
                                <TextField id="standard-basic"
                                    sx={{ width: "75%", m: 1 }}
                                    label="Your Name"
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField id="standard-basic"
                                    sx={{ width: "75%", m: 1 }}
                                    label="Your Email"
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField id="standard-basic"
                                    label="Your Password"
                                    sx={{ width: "75%", m: 1 }}
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField id="standard-basic"
                                    label="Confirm Password"
                                    sx={{ width: "75%", m: 1 }}
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <Button type="submit"
                                    variant="contained"
                                    sx={{ width: "75%", m: 1 }}
                                >Register</Button>
                                <NavLink to="/login"
                                    style={{ textDecoration: "none" }}
                                > <Button type="submit"
                                    variant="text"
                                    sx={{ width: "75%", m: 1 }}
                                >Already Have an Account? Please Login</Button></NavLink>

                            </form>
                        }
                        {
                            isLoading && <CircularProgress />
                        }
                        {
                            user?.email && <Alert severity="success">User Created Successfully!!</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginimg} style={{ width: "100%" }} alt="" />
                </Grid>

            </Grid>
        </Container>

    );
};

export default Register;