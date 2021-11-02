import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Container } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundPosition: "center",
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode: "darken,luminosity"
}

const AppointmentBanner = () => {
    return (
        <Container>
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ height: "400px", marginTop: "-110px" }}
                            src={doctor} alt="doctor" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textAlign: "left",
                        alignItems: "center"
                    }}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                                Appointment
                            </Typography>
                            <Typography variant="h4" sx={{ mb: 5 }} style={{ color: 'white' }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 400 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non iure provident ex voluptatum magni optio corrupti officia ab, porro accusamus quibusdam consectetur est totam veniam commodi aliquid veritatis exercitationem?
                            </Typography>
                            <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentBanner;