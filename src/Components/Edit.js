import { Button, Dialog, DialogActions, DialogContent, TextField, Typography } from '@material-ui/core';
import { h2 } from '@material-ui/icons';
import { InputLabel } from '@mui/material';
import React, { useState } from 'react';
import './Edit.css';


const Edit = ({handleCloser}) => {
   
    const [state, setState]=useState();
    const close = () => {
    setState({ showModal: false });
      }
 
    return (
            <div className='edit-popup-model'>
                <div className='buttonside'>
                <h2>Edit Chicken</h2>
                <Button onClick={handleCloser } className="icon">X</Button>
                </div>
                <DialogContent>
                <TextField id="outlined-basic" label="Enter ID" variant="outlined" style={{width:"400px", padding:"10px 10px 10px 10px"}} />
                <TextField id="outlined-basic" label="Enter Name" variant="outlined" style={{width:"400px", padding:"10px 10px 10px 10px"}} />
                <TextField id="outlined-basic" label="Enter Email" variant="outlined" style={{width:"400px", padding:"10px 10px 10px 10px"}} />
                <TextField id="outlined-basic" label="Enter Body" variant="outlined" style={{width:"400px", padding:"10px 10px 10px 10px"}} />
                </DialogContent>
                <DialogActions>
                    <div className='button'><Button onClick={handleCloser} >X Cancel</Button></div>
                    <div  className='button2'><Button onClick={handleCloser}>Save</Button></div>
                </DialogActions>
            </div>
    );
}
export default Edit;