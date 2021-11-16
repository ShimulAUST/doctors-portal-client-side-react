import { Alert, Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        fetch('https://lit-forest-68710.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setSuccess(false);
            });

    }
    return (
        <div>
            <Navigation></Navigation>
            <h2>Add a Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="standard-basic"
                    label="Name"
                    sx={{ width: '50%' }}
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" /> <br />
                <TextField id="standard-basic"
                    label="Email"
                    sx={{ width: '50%' }}
                    type="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant="standard" /> <br />

                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
            {
                success && <Alert severity="success">Doctor Added Successfully</Alert>
            }
        </div>
    );
};

export default AddDoctor;