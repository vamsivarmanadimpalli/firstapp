import { TextField } from "@mui/material";
import React from "react";
import './Edit.css';

const Adduser = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd( e.target.name.value, e.target.username.value, e.target.phone.value, e.target.email.value);
    e.target.name.value = "";
    e.target.username.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
  };

  return (
    <div className="formdialog">
            <form onSubmit={handleOnSubmit}>
        <h3>Add User</h3>
<TextField id="outlined-basic" placeholder="Name" name="name"/>
<TextField id="outlined-basic" placeholder="UserName" name="username" />
<TextField id="outlined-basic" placeholder="Phone" name="phone" />
<TextField id="outlined-basic" placeholder="Email" name="email" />
{/* <TextField id="outlined-basic" label="Status*" variant="outlined" style={{width:"200px", padding:"2px 2px 2px 2px"}} /> */}
{/* <TextField id="outlined-basic" label="Status*" variant="outlined" style={{width:"200px", padding:"2px 2px 2px 2px"}} /> */}
        <button onSubmit={handleOnSubmit}>Add</button>
      </form>
    </div>
  );
};

export default Adduser;
