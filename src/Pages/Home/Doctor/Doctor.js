import { Grid, Typography } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <img style={{ width: '200px', height: '200px' }} src={`data:image/jpg;base64,${doctor.image}`} />
            <Typography>
                {doctor.name}
            </Typography>
        </Grid>
    );
};

export default Doctor;