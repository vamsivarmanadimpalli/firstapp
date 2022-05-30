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
import  Modal from '@mui/material/Modal';
import User from '../Components/User';
import Adduser from '../Components/Adduser';

const HomePage = (props) => {
  const [open, setOpen] = React.useState(false);
  const [noOfRows, setNoOfRows] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userId, setUserId] = useState(null);

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

  const onAdd = async (name,username,phone, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        username: username,
        phone:phone,
        email: email
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

  const onSelectUser = (id) => {
let user=users[id-1];
setName(user.name)
setEmail(user.email)
setMobile(user.mobile)
setUserId(user.id)

  }


  const refreshpage=()=>{
window.location.reload();
  }

  const [isFormDialogModalOpen, setFormDialogModalState] = useState(false);
  const handleFormDialogModal = () => setFormDialogModalState(false);

const [isEditModalOpen, setEditModalState] = useState(false);
const handleEditModal = () => {
  setEditModalState(false);
}

return (
  <div style={{width:"100%"}}>
    <h1 >React-App</h1>
    <div style={{ textAlign: 'right' }} >
      <button className='product_btns' ><GetApp /></button>
      <button className='product_btns' onClick={() => setFormDialogModalState(true)}><AddIcon /></button>
      <button className='product_btns' onClick={refreshpage}><RefreshIcon /></button>
      <button className='product_btns' ><PublishIcon /></button>
    </div>
    <div style={{width:"100%"}}>
    <div style={{width:"100%"}}>
      <table className='data user-data' cellspacing="0">
        <thead>
          <tr>
              <th>Id</th>
              <th>Action</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Phone</th>
              <th>Email</th>
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
              onDelete={onDelete}
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
      <Adduser onAdd={onAdd} handleCloser={()=>{ handleFormDialogModal(false)}} />
    </Modal>
    <div >
      <Modal
        open={isEditModalOpen}
        onClose={() => handleEditModal(false)}
      >
        <Edit handleCloser={()=>{ handleEditModal(false)}} />
      </Modal>
    </div>
  </div >
  )
}
export default HomePage;