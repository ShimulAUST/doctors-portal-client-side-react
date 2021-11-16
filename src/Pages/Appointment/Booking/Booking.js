import { Grid } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space, price } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={8} sm={6} md={4}>

                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>

                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>

                    <Typography variant="caption" gutterBottom component="div">
                        {space} Spaces Avaiable
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        price : ${price}
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                date={date}
                setBookingSuccess={setBookingSuccess}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
            ></BookingModal>
        </>
    );
};

export default Booking;