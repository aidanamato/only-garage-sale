import React, { useState, useRef } from 'react';
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
    const [formState] = useState({
      firstName: useRef(),
      lastName: useRef(),
      email: useRef(),
      password: useRef(),
      zipCode: useRef()
    });
    const [errorMsg, setErrorMsg] = useState();
    const [state, dispatch] = usePageContext();

    const [addUser] = useMutation(ADD_USER);
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      // check to see each field in the form is populated
      const validateForm = Object.values(formState).every(ref => ref.current.value);
      if (!validateForm) {
        setErrorMsg('All fields required')
      }

      const signupData = Object.values(formState).map(ref => ref.current.value);
      const signupObj = {
        firstName: signupData[0],
        lastName: signupData[1],
        email: signupData[2],
        password: signupData[3],
        zipCode: signupData[4]
      }
      
      try {
        const { data } = await addUser({
          variables: {
            user: signupObj
          }
        });

        const token = data.addUser.token;
        Auth.login(token);

      } catch (err) {
        console.log(err);
        setErrorMsg('Error Signing Up');
      }
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
          {errorMsg && 
          <div
            style={{textAlign: 'center', color: 'red'}}
          >{errorMsg}</div>}
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
                      inputRef={formState.firstName} />
                  <TextField 
                      sx={{
                          m: 2
                      }}
                      id='outlined-basic lastName' 
                      label='Last Name' 
                      variant='outlined' 
                      inputRef={formState.lastName} />
              </div>
              <TextField 
                  sx={{
                      m: 2
                  }}
                  id='outlined-basic email' 
                  label='Email' 
                  variant='outlined'
                  inputRef={formState.email}/>
              <TextField 
                  sx={{
                      m: 2
                  }}
                  id='outlined-basic password' 
                  label='Password' 
                  variant='outlined'
                  type='password'
                  inputRef={formState.password}/>
              <TextField 
                  sx={{
                      m: 2
                  }}
                  id='outlined-basic zipCode' 
                  label='Zip Code' 
                  variant='outlined'
                  inputRef={formState.zipCode} />
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