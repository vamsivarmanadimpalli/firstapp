import  React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

const FormDialog = () => {
    const [open, setOpen] = React.useState(true);
    
    const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
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
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button autoFocus onClick={handleClose}>
                        Submit
                    </Button>
                </DialogActions> 
            </Dialog>



        </div>
    );
}
export default FormDialog;