import { Button, DialogActions, DialogContent, TextField } from '@mui/material';
import React, { useState } from  'react';
import './Edit.css';


const Edituser = ({handleCloser, fetchData }) => {

    const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  // const [userId, setUserId] = useState(null);

    function onSelectUser(id) {
        let user = users[id - 1];
        setName(user.name)
        setUserName(user.username)
        setPhone(user.phone)
        setEmail(user.email)
        setWebsite(user.website)
        // setUserId(user.id)
    
      }
    
      const updateUser = (id) => {
    let user={name,username,phone,email,website}
    console.log("user", user);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(user)
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp)
        fetchData()
      })
    })
    
      }
      const handleSelectUser = (id) => {
        onSelectUser(id);
    }

    return (

<>
<div className='edit-popup-model'>
<Button onClick={handleCloser}>X</Button>

<DialogContent>
<thead>
              <tr>
                <th><TextField id="outlined-basic" placeholder="Id" style={{ width: "167px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" placeholder="Action" style={{ width: "167px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Name" style={{ width: "167px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" onChange={(e) => { setUserName(e.target.value) }} value={username} placeholder="UserName"  style={{ width: "167px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" onChange={(e) => { setPhone(e.target.value) }} value={phone} placeholder="Phone" name="phone" style={{ width: "167px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Email" name="email" style={{ width: "167px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" onChange={(e) => { setWebsite(e.target.value) }} value={website} placeholder="Website" name="website" style={{ width: "167px", padding: "2px 2px 2px 2px" }} /></th>
                <th><button onClick={updateUser}>update</button></th>
              </tr>
            </thead> 
</DialogContent>



<DialogActions>
                    <button onClick={handleCloser} >X Cancel</button>
                </DialogActions>
                </div>
</>

    )

}
export default Edituser;