import * as React from 'react';

import {
    Button,
    TextField,
    Dialog,
    DialogTitle
} from '@mui/material';
import { Box } from '@mui/system';

function SignUp() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant='outlined' onClick={handleClickOpen}>
                SignUp
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle
                    sx={{
                        m: 'auto'
                    }}
                >
                    Sign Up
                </DialogTitle>
                <Box
                    component='form'
                    sx={{
                        m: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                    noValidate
                    autoComplete='off'
                >
                    <div>
                        <TextField
                            sx={{
                                m: 2
                            }}
                            id='outlined-basic' 
                            label='First Name' 
                            variant='outlined' />
                        <TextField 
                            sx={{
                                m: 2
                            }}
                            id='outlined-basic' 
                            label='Last Name' 
                            variant='outlined' />
                    </div>
                    <TextField 
                        sx={{
                            m: 2
                        }}
                        id='outlined-basic' 
                        label='Email' 
                        variant='outlined' />
                    <TextField 
                        sx={{
                            m: 2
                        }}
                        id='outlined-basic' 
                        label='Password' 
                        variant='outlined' />
                    <TextField 
                        sx={{
                            m: 2
                        }}
                        id='outlined-basic' 
                        label='Zip Code' 
                        variant='outlined' />
                    <Button 
                        sx={{
                            width: '75%',
                            m: 'auto'
                        }}
                        variant='contained'
                    >
                        Submit
                    </Button>
                </Box>
            </Dialog>
        </div>
    )
}

export default SignUp;