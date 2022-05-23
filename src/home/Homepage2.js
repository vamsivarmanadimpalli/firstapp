import { useEffect, useState } from "react";
import axios from "axios";
import { AgGridReact } from 'ag-grid-react';
import React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { GetApp } from "@material-ui/icons";
import PublishIcon from '@material-ui/icons/Publish';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import FormDialog from "../Components/FormDialog";
import { Modal } from "@material-ui/core";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import EditIcon from '@mui/icons-material/Edit';
import Edit from "../Components/Edit";

const Homepage2 = (props) => {
  const [record, setRecord] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((response) =>{
      console.log(response.data);
      setRecord(response.data);
    })
  }, [])
  
  const deleteRow = (force = false) => {
      let data = props.data;
      let confirm = true;
      if (!force) {
        confirm = window.confirm(`are you sure you want to delete this row: ${JSON.stringify (data)}`)
      }
      if (confirm) {
        props.api.updateRowData({remove:[data]});
        props.api.refreshCells({force:true});
      }
    }
const [state,setState]= useState()
const onButtonClick = (e) => {
    this.setState({
      visible: true
    });
    const selectedNodes = this.gridApi.getSelectedNodes();
    let deletedRow = selectedNodes;
    e.gridApi.updateRowData({ remove: [deletedRow] });
  };
  
const col= [
    { headerName: "ID", field: "id"},
    {headerName: "Country", headerClass: 'new-class',
        cellRendererFramework:(params)=>
        <div>
                  <EditIcon onClick={() => setEditModalState(true)}/>  
    <DeleteOutlineSharpIcon width={13}  onClick={() => onButtonClick()}  />
        </div>},
    { headerName: "Name", field: "name"},
    { headerName: "Email", field: "email"},
    { headerName: "Body", field: "body"},
    
  ]
  const defaultColDef = {
    sortable: true,
    flex: 1, filter: true,
    floatingFilter: true
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
    <>
      <h1 >React-App</h1>
    <div style={{ textAlign: 'right' }} >
        <button className='product_btns'><GetApp /></button>
        <button className='product_btns'  onClick={() => setFormDialogModalState(true)}><AddIcon /></button>
        <button className='product_btns' onClick={refreshpage}><RefreshIcon /></button>
        <button className='product_btns' ><PublishIcon /></button>
      </div>
        <div className="ag-theme-alpine" style={{height:'400px'}}>
        <AgGridReact
            columnDefs={col}
            rowData={record}
            defaultColDef={defaultColDef}
            >
        </AgGridReact>
        <Modal
      open={isFormDialogModalOpen}
      onClose={() => handleFormDialogModal(false)}
      >

      <FormDialog />
      </Modal>
      <Modal
      open={isEditModalOpen}
      onClose={() => handleEditModal(false)}
      >
        <Edit />
      </Modal>
      </div>
    </>
  );
}

export default Homepage2;
