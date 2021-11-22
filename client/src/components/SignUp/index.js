import React from 'react';
import { usePageContext } from '../../utils/GlobalState';

import {
    Button,
    TextField,
    Dialog,
    DialogTitle
} from '@mui/material';
import { Box } from '@mui/system';

function SignUp() {
    const [state, dispatch] = usePageContext();

    const handleClose = () => {
        dispatch({
          type: 'UPDATE_SIGNUP_MODAL'
        })
    };

    return (
      <Dialog open={state.signupModal} onClose={handleClose}>
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
                  onClick={handleClose}
              >
                  Submit
              </Button>
          </Box>
      </Dialog>
    )
}

export default SignUp;