import React from "react";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import EditIcon from '@mui/icons-material/Edit';
import './Edit.css'

const User = ({ id, email, name, onDelete, username, phone,onSelectUser }) => {
    const handleDelete = () => {
        onDelete(id);
    };

    const handleSelectUser = () => {
        onSelectUser(id);
    }

    return (
        <>  
                <tr>
                    <td>{id}</td>
                    <td><EditIcon onClick={handleSelectUser} /> <DeleteOutlineSharpIcon onClick={handleDelete} /></td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                </tr>
            </>
    );
};

export default User;


