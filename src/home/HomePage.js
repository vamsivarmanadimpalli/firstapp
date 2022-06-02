import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import PublishIcon from '@material-ui/icons/Publish';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import { GetApp, Home } from '@material-ui/icons';
import './HomePage.css';
import FormDialog from '../Components/FormDialog';
import Edit from '../Components/Edit';
import Modal from '@mui/material/Modal';
import User from '../Components/User';
import Adduser from '../Components/Adduser';
import axios from 'axios';
import Edituser from '../Components/Edituser';
import { Button, TextField, Typography } from '@mui/material';

const HomePage = (props) => {
  const [open, setOpen] = React.useState(false);
  const [noOfRows, setNoOfRows] = useState(1);
  // const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  // const [userId, setUserId] = useState(null);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, username, phone, email, website) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        username: username,
        phone: phone,
        email: email,
        website: website
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


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


  // const update = (e) => {
  //   e.preventDefault();
  //   const employee = {
  //       name: this.state.name,
  //       age: this.state.age,
  //       salary: this.state.salary,
  //   }
  //   axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
  //   .then(res => console.log(res.data));
  // }


  const refreshpage = () => {
    window.location.reload();
  }

  const [isFormDialogModalOpen, setFormDialogModalState] = useState(false);
  const handleFormDialogModal = () => setFormDialogModalState(false);

  const [isEditModalOpen, setEditModalState] = useState(false);
  const handleEditModal = () => {
    setEditModalState(false);
  }

  return (
    <div style={{ width: "100%" }}>
      <h1 >React-App</h1>
      <div style={{ textAlign: 'right' }} >
        <button className='product_btns' onClick={() => setEditModalState(true)}><GetApp  /></button>
        <button className='product_btns' onClick={() => setFormDialogModalState(true)}><AddIcon /></button>
        <button className='product_btns' onClick={refreshpage}><RefreshIcon /></button>
        <button className='product_btns' ><PublishIcon /></button>
      </div>
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <table className='data user-data' cellspacing="0">
            <thead>
              <tr>
                <th>Id</th>
                <th>Action</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Website</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th><Typography id="outlined-basic" placeholder="Id" style={{ width: "166px", padding: "2px 2px 2px 2px" }} /></th>
                {/* <th><Typography variant="h1" component="h2" id="outlined-basic" placeholder="Action" style={{ width: "50px", padding: "2px 2px 2px 2px" }} ></Typography></th> */}
                <th><Button onClick={updateUser} style={{ width: "166px", padding: "2px 2px 2px 2px" }}>update</Button></th>
                <th><TextField id="outlined-basic" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Name" style={{ width: "166px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" onChange={(e) => { setUserName(e.target.value) }} value={username} placeholder="UserName"  style={{ width: "166px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" onChange={(e) => { setPhone(e.target.value) }} value={phone} placeholder="Phone" name="phone" style={{ width: "166px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Email" name="email" style={{ width: "166px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" onChange={(e) => { setWebsite(e.target.value) }} value={website} placeholder="Website" name="website" style={{ width: "166px", padding: "2px 2px 2px 2px" }} /></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <User
                  id={user.id}
                  key={user.id}
                  name={user.name}
                  username={user.username}
                  phone={user.phone}
                  email={user.email}
                  website={user.website}
                  onDelete={onDelete}
                  onSelectUser={onSelectUser}
                // setEditModalState={setEditModalState}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        open={isFormDialogModalOpen}
        onClose={() => handleFormDialogModal(false)}
      >
        <Adduser onAdd={onAdd} handleCloser={() => { handleFormDialogModal(false) }} />
      </Modal>
      <div >
        <Modal
          open={isEditModalOpen}
          onClose={() => handleEditModal(false)}
        >
          <Edituser handleCloser={() => { handleEditModal(false) }} />
        </Modal>
      </div>
    </div >
  )
}
export default HomePage;