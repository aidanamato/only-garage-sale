import React, { useState, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../../utils/mutations';

// Post Button
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

// Date
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

// Modal/Text Input
import {
    Button,
    TextField,
    Dialog,
    DialogTitle
} from '@mui/material';
import { Box } from '@mui/system';

function CreatePost() {
    const [open, setOpen] = useState(false);
    const [formState] = useState({
      title: useRef(),
      address: useRef(),
      description: useRef(),
      startTime: useRef(),
      endTime: useRef()
    });
    const [errorMsg, setErrorMsg] = useState();

    const [addEvent] = useMutation(ADD_EVENT);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const fabStyle = {
      position: 'fixed',
      bottom: 30,
      right: 20,
      zIndex: 10,
    }

    const submitHandler = async (event) => {
      event.preventDefault();
      
      console.log(formState);
      // check to see each field in the form is populated
      const validateForm = Object.values(formState).every(ref => ref.current.value);
      if (!validateForm) {
        setErrorMsg('All fields required')
      }

      const eventData = Object.values(formState).map(ref => ref.current.value);
      const eventObj = {
        title: eventData[0],
        address: eventData[1],
        description: eventData[2],
        startTime: eventData[3],
        endTime: eventData[4]
      }
      console.log(eventObj);

      // try {
      //   const { data } = await addEvent({
      //     variables: {
      //       event: eventObj
      //     }
      //   });

      //   console.log(data);
      // } catch (err) {
      //   console.log(err);
      //   setErrorMsg('Error Signing Up');
      // }
    };
  

    return (
        <div>
            <Button onClick={handleClickOpen} sx={ fabStyle }>
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle
                    sx={{
                        m: 'auto'
                    }}
                >
                    Post a Yard Sale!
                </DialogTitle>
                {errorMsg && 
                <div
                  style={{textAlign: 'center', color: 'red'}}
                >{errorMsg}</div>}
                <Box
                    component='form'
                    sx={{
                        m: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                    noValidate
                    autoComplete='off'
                    onSubmit={submitHandler}
                >
                    <div>
                        <TextField              
                            fullWidth label="fullWidth"
                            id='outlined-basic-fullWidth-margin-normal' 
                            label='Title' 
                            margin="normal"
                            variant='outlined'
                            inputRef={formState.title} />
                        <TextField 
                            fullWidth label="fullWidth"
                            id='outlined-basic-fullWidth-margin-normal' 
                            label='Address' 
                            margin="normal"
                            variant='outlined'
                            inputRef={formState.address} />
                        <TextField
                          fullWidth label="fullWidth"
                          id="outlined-textarea-fullWidth-margin-normal"
                          label="Description"
                          margin="normal"
                          placeholder=""
                          multiline 
                          inputRef={formState.description}/>
                        <TextField
                          fullWidth label="fullWidth"
                          id="outlined-textarea-fullWidth-margin-normal"
                          label="Start"
                          margin="normal"
                          placeholder=""
                          multiline 
                          inputRef={formState.startTime}/>
                        <TextField
                          fullWidth label="fullWidth"
                          id="outlined-textarea-fullWidth-margin-normal"
                          label="End"
                          margin="normal"
                          placeholder=""
                          multiline 
                          inputRef={formState.endTime}/>
                    </div>
                    <Button 
                        sx={{
                            width: '75%',
                            m: 'auto'
                        }}
                        label={'margin="normal"'}
                        id="margin-normal"
                        margin="normal"
                        variant='contained'
                        type='submit'
                    >
                        Post
                    </Button>
                </Box>
            </Dialog>
        </div>
    )
}

export default CreatePost; 