import React, { useEffect, useMemo, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import PublishIcon from '@material-ui/icons/Publish';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import EditIcon from '@mui/icons-material/Edit';
import { GetApp, Home } from '@material-ui/icons';
import './HomePage.css';
import FormDialog from '../Components/FormDialog';
import Edit from '../Components/Edit';
import  Modal from '@mui/material/Modal';
import Page from '../Page';

const HomePage = (props) => {
  const [open, setOpen] = React.useState(false);
  const [noOfRows, setNoOfRows] = useState(1);

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Country", field: "country", width: 10, cellRenderer: "iconComponent"},
    { headerName: "Name", field: "name" },
    { headerName: "Email", field: "email" },
    { headerName: "Body", field: "body",edittable: true }
  ];
  // const defaultColDef = {
  //   sortable: true,
  //   flex: 1, filter: true,
  //   floatingFilter: true
  // }
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
    flex: 1, filter: true,
    floatingFilter: true
    };
  }, []);

  let obj={};
  const [data,setData]=useState(obj);
 

  const refreshpage=()=>{
window.location.reload();
  }

function deleteRow(force = false) {
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

function deleteProduct(productId) {
  const { products } = this.state;

  const apiUrl = 'https://jsonplaceholder.typicode.com/comments';
  const formData = new FormData();
  formData.append('productId', productId);

  const options = {
    method: 'POST',
    body: formData
  }

  fetch(apiUrl, options)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          response: result,
          products: products.filter(product => product.id !== productId)
        });
      },
      (error) => {
        this.setState({ error });
      }
    )
}

    const onGridReady = (params)=>{
console.log("grid id ready")
fetch("https://jsonplaceholder.typicode.com/comments").then(resp=>resp.json())
.then(resp=>{console.log(resp)
  params.api.applyTransaction({add:resp})})
  }
  function IconComponent(props) {
    return (<><EditIcon onClick={() => setEditModalState(true)}/>  
    <DeleteOutlineSharpIcon width={13}  onClick={() => this.deleteProduct()}  /></>);
  }

  const [isFormDialogModalOpen, setFormDialogModalState] = useState(false);
  const handleFormDialogModal = () => setFormDialogModalState(false);

const [isEditModalOpen, setEditModalState] = useState(false);
const handleEditModal = () => {
  setEditModalState(false);
}

const [isPageOpen, setPageState] = useState();
const handlePage = () => {
  setPageState(true);
}

return (
  <div className="App">
    <h1 >React-App</h1>
    <div style={{ textAlign: 'right' }} >
      <button className='product_btns' ><GetApp /></button>
      <button className='product_btns' onClick={() => setFormDialogModalState(true)}><AddIcon /></button>
      <button className='product_btns' onClick={refreshpage}><RefreshIcon /></button>
      <button className='product_btns' ><PublishIcon /></button>
    </div>
    <div className="ag-theme-alpine" style={{ height: '400px' }}>
      <AgGridReact
        frameworkComponents={{
          iconComponent: IconComponent
        }}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}>
      </AgGridReact>
    </div>
    <Modal
      open={isFormDialogModalOpen}
      onClose={() => handleFormDialogModal(false)}
    >
      <FormDialog handleCloser={()=>{ handleFormDialogModal(false)}} />
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