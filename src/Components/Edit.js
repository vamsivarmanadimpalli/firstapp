import { Button, Dialog, DialogActions, DialogContent, TextField, Typography } from '@material-ui/core';
import { h2 } from '@material-ui/icons';
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import React, { useState } from 'react';
import './Edit.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const name2 = [
'Cm',
'm',
'km',
'mm',
'mi',
'yd',
'ft',
'in',
];

const Edit = ({handleCloser}) => {

    const [personNames, setPersonNames] = useState([]);
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleChanges = (event) => {
        const {
          target: { value },
        } = event;
        setPersonNames(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
      
    return (
        <div className='scroll'>
            <div className='edit-popup-model'>
                <div className='buttonside'>
                <h2>Edit Chicken</h2>
                <Button onClick={handleCloser } className="icon">X</Button>
                </div>
                <DialogContent>
                <TextField id="outlined-basic" label="Name*" variant="outlined" style={{width:"400px", padding:"5px 5px 5px 5px"}} />
                <FormControl style={{width:"400px", padding:"5px 5px 5px 5px"}}>
                <InputLabel id="demo-multiple-checkbox-label"  >Categories*</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Categories*" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        </FormControl>
                <TextField id="outlined-basic" label="Created Time*" variant="outlined" style={{width:"400px", padding:"5px 5px 5px 5px"}} />
                <TextField id="outlined-basic" label="Last Modified Source Id*" variant="outlined" style={{width:"400px", padding:"5px 5px 5px 5px"}} />
                <TextField id="outlined-basic" label="Brand*" variant="outlined" style={{width:"400px", padding:"5px 5px 5px 5px"}} />
                <TextField id="outlined-basic" label="Unit size*" variant="outlined" style={{width:"400px", padding:"5px 5px 5px 5px"}} />
                <FormControl style={{width:"400px", padding:"5px 5px 5px 5px"}}>
                <InputLabel id="demo-multiple-checkbox-label"  >Measurement Unit*</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personNames}
          onChange={handleChanges}
          input={<OutlinedInput label="Measurement Unit*" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {name2.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personNames.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        </FormControl>
                <TextField id="outlined-basic" label="Measurement Unit*" variant="outlined" style={{width:"400px", padding:"5px 5px 5px 5px"}} />
                <div className='check'><Checkbox {...label} /><h5>Is Active ?</h5></div>

                </DialogContent>
                <DialogActions>
                    <div className='button'><Button onClick={handleCloser} >X Cancel</Button></div>
                    <div  className='button2'><Button onClick={handleCloser}>Save</Button></div>
                </DialogActions>
            </div>
            </div>
    );
}
export default Edit;