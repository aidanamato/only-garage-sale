import React, { useState } from 'react';
import { usePageContext } from '../../utils/GlobalState';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

import {
    Button,
    TextField,
    Dialog,
    DialogTitle
} from '@mui/material';
import { Box } from '@mui/system';

function SignUp() {
    const [formState, setFormState] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      zipCode: ''
    });
    const [state, dispatch] = usePageContext();

    const [addUser] = useMutation(ADD_USER);
    
    const handleBlur = (event) => {
      const label = event.target.id.split(' ')[1];
      setFormState({
        ...formState,
        [label]: event.target.value
      });
    }
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      
      const { data } = await addUser({
        variables: {
          user: formState
        }
      });
      
      const token = data.addUser.token;
      Auth.login(token);
    };

    const handleClose = () => {
      dispatch({
        type: 'UPDATE_SIGNUP_MODAL'
      });
    }

    return (
      <Dialog name='signup' open={state.signupModal} onClose={handleClose}>
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
              onSubmit={handleSubmit}
          >
              <div>
                  <TextField
                      sx={{
                          m: 2
                      }}
                      id='outlined-basic firstName' 
                      label='First Name' 
                      variant='outlined'
                      onBlur={handleBlur} />
                  <TextField 
                      sx={{
                          m: 2
                      }}
                      id='outlined-basic lastName' 
                      label='Last Name' 
                      variant='outlined' 
                      onBlur={handleBlur}/>
              </div>
              <TextField 
                  sx={{
                      m: 2
                  }}
                  id='outlined-basic email' 
                  label='Email' 
                  variant='outlined' 
                  onBlur={handleBlur}/>
              <TextField 
                  sx={{
                      m: 2
                  }}
                  id='outlined-basic password' 
                  label='Password' 
                  variant='outlined'
                  type='password' 
                  onBlur={handleBlur}/>
              <TextField 
                  sx={{
                      m: 2
                  }}
                  id='outlined-basic zipCode' 
                  label='Zip Code' 
                  variant='outlined' 
                  onBlur={handleBlur}/>
              <Button
                  htmlFor="signup"
                  type="submit" 
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
    )
}

export default SignUp;