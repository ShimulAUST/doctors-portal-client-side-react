import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { height } from '@mui/system';
const bannerBg = {
    background: `url${bg}`,

}
const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height: 400
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: "left" }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" component="div">
                            Your New Smile<br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, color: "grey", fontWeight: 200 }} component="div">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid labore optio dignissimos, pariatur odit fugit nesciunt recusandae temporibus soluta. Neque!
                        </Typography>
                        <Button variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: "400px" }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;