import  React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import './Edit.css';

const FormDialog = ({handleClose}) => {
    const [open, setOpen] = React.useState(true);
  const handleCloser = () => {
    setOpen(false);
  };

    return (
        <div className='formdialog'>
                <DialogTitle id="alert-dialog-title">
                    Create new user
                </DialogTitle>
                <DialogContent>
                    <form>
                        <TextField id="name" placeholder="Enter name" lable="name" style={{width:'100%'}} />
                        <TextField id="Categories" placeholder="Enter name" lable="name"  style={{width:'100%'}} />
                        <TextField id="Brand" placeholder="Enter name" lable="name"  style={{width:'100%'}} />
                        <TextField id="Unit Size" placeholder="Enter name" lable="number"  style={{width:'100%'}} />
                        <TextField id="Measuring Unit" placeholder="Enter name" lable="number"  style={{width:'100%'}} />
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