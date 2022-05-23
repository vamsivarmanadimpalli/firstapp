import  React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import './Edit.css';

const FormDialog = ({handleCloser}) => {
   

    return (
        <div className='formdialog'>
            <div className='buttonside'>
                    <h3>Create new user</h3>
            <Button onClick={handleCloser} className='buttonside'>X</Button>
                    </div>
                <DialogContent>
                    <form>
                        <TextField id="name" placeholder="Enter ID" lable="name" style={{width:'100%'}} />
                        <TextField id="Categories" placeholder="Enter Name" lable="name"  style={{width:'100%'}} />
                        <TextField id="Brand" placeholder="Enter Email" lable="name"  style={{width:'100%'}} />
                        <TextField id="Unit Size" placeholder="Enter Body" lable="number"  style={{width:'100%'}} />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloser}>Cancel</Button>
                    <Button  onClick={handleCloser}>
                        Submit
                    </Button>
                </DialogActions> 
        </div>
    );
}
export default FormDialog;