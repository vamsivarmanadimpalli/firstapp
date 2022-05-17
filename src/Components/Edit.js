import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import React from 'react';


const Edit = () => {
    const [open, setOpen] = React.useState(true);
    const handleCloser = () => {
      setOpen(false);
    };

    return (
<>  
<Dialog
open={open}
onClose={handleCloser}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description">
<DialogContent>
<TextField id="name" placeholder="Enter Id" lable="name" style={{width:'100%'}} />
<TextField id="name" placeholder="Enter Name" lable="name" style={{width:'100%'}} />
<TextField id="name" placeholder="Enter Email" lable="name" style={{width:'100%'}} />
<TextField id="name" placeholder="Enter Body" lable="name" style={{width:'100%'}} />
</DialogContent>
<DialogActions>
                    <Button onClick={handleCloser}>Cancel</Button>
                    <Button  onClick={handleCloser}>Submit</Button>
                </DialogActions>
</Dialog>
   </>
);
    }
export default Edit;