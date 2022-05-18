import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import React from 'react';
import './Edit.css';


const Edit = () => {
    const [open, setOpen] = React.useState(true);
    const handleCloser = () => {
        setOpen(false);
    };

    return (
            <div className='edit-popup-model'>
                <DialogContent>
                    <TextField id="name" placeholder="Enter Id" lable="name" style={{ width: '100%' }} />
                    <TextField id="name" placeholder="Enter Name" lable="name" style={{ width: '100%' }} />
                    <TextField id="name" placeholder="Enter Email" lable="name" style={{ width: '100%' }} />
                    <TextField id="name" placeholder="Enter Body" lable="name" style={{ width: '100%' }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloser}>Cancel</Button>
                    <Button onClick={handleCloser}>Submit</Button>
                </DialogActions>
            </div>
    );
}
export default Edit;