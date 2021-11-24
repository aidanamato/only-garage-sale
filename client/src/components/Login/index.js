import React, { useState, useRef } from 'react';
import { usePageContext } from '../../utils/GlobalState';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

import {
    Button,
    TextField,
    Dialog,
    DialogTitle
} from '@mui/material';
import { Box } from '@mui/system';

function Login() {
    const emailRef = useRef();
    const pwRef = useRef();

    const [formError, setFormError] = useState(false);
    const [state, dispatch] = usePageContext();

    const [login] = useMutation(LOGIN);
    
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await login({
          variables: {
            email: emailRef.current.value,
            password: pwRef.current.value
          }
        });

        const token = data.login.token;
        Auth.login(token);

      } catch (err) {
        console.log(err);
        setFormError(true);
      }
    };

    const handleClose = () => {
      dispatch({
        type: 'UPDATE_LOGIN_MODAL'
      });
    }

    return (
      <Dialog name='login' open={state.loginModal} onClose={handleClose}>
          <DialogTitle
            sx={{
              m: 'auto'
            }}
          >
            Login
          </DialogTitle>
          {formError && 
          <div
            style={{textAlign: 'center', color: 'red'}}
          >Incorrect credentials</div>}
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
              <TextField
                  sx={{
                      m: 2
                  }}
                  id='outlined-basic email' 
                  label='Email' 
                  variant='outlined'
                  inputRef={emailRef} />
              <TextField 
                  sx={{
                      m: 2
                  }}
                  id='outlined-basic password' 
                  label='Password' 
                  variant='outlined'
                  type='password'
                  inputRef={pwRef} />
              <Button
                  htmlFor="login"
                  type="submit" 
                  sx={{
                      width: '75%',
                      m: 'auto'
                  }}
                  variant='contained'
              >
                  Login
              </Button>
          </Box>
      </Dialog>
    )
}

export default Login;