import * as React from 'react';

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
    const [open, setOpen] = React.useState(false);

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

    const [value, setValue] = React.useState(new Date('2021-11-24T11:11:11'));

    const handleChange = (newValue) => {
      setValue(newValue);
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
                    Create Post
                </DialogTitle>
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
                >
                    <div>
                        <TextField              
                            fullWidth label="fullWidth"
                            id='outlined-basic-fullWidth-margin-normal' 
                            label='Title' 
                            margin="normal"
                            variant='outlined' />
                        <TextField 
                            fullWidth label="fullWidth"
                            id='outlined-basic-fullWidth-margin-normal' 
                            label='Address' 
                            margin="normal"
                            variant='outlined' />
                    </div>
                    <TextField
                        fullWidth label="fullWidth"
                        id="outlined-textarea-fullWidth-margin-normal"
                        label="Description"
                        margin="normal"
                        placeholder=""
                        multiline />
                    
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDatePicker
                            sx={{ m: 8 }}
                            label="Date Start"
                            inputFormat="MM/dd/yyyy"

                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}

                        />
                        <div></div>
                        <MobileDatePicker
                            sx={{ m: 8 }}
                            label="Date End"
                            inputFormat="MM/dd/yyyy"

                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    
                    <Button 
                        sx={{
                            width: '75%',
                            m: 'auto'
                        }}
                        label={'margin="normal"'}
                        id="margin-normal"
                        margin="normal"
                        variant='contained'
                    >
                        Post
                    </Button>
                </Box>
            </Dialog>
        </div>
    )
}

export default CreatePost; 