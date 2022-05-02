import React, { useEffect, useState } from 'react';
import './App.css';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import PublishIcon from '@material-ui/icons/Publish';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import { GetApp } from '@material-ui/icons';
import FormDialog from './Components/FormDialog';
import form from './Components/form.json';


const App = () => {
  const [rowData, setRowData] = useState(userData);
  const [gridApi, setGridApi] = useState(null)
  const [tableData, setTableData] = useState(userData)
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  
  const columnDefs = [
    { headerName: "#" },
    { headerName: "Actions" },
    { headerName: "Images" },
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name", },
    { headerName: "Brand", field: "name", },
    { headerName: "measurements", field: "number" },
    { headerName: "Is active", field: "dob" },
    { headerName: "Categories", field: "name" },
    { headerName: "Price", field: "number" },

  ]

const userData = [
  {num: "Toyota", name: "Celica", name2: 35000},
  {num: "Ford", name: "Mondeo", name2: 32000},
  {num: "Porsche", name: "Boxter", name2: 72000}
];
  const onGridReady = (params) => {
    setGridApi(params)
  }
  const defaultColDef = {
    sortable: true,
    flex: 1, filter: true,
    floatingFilter: true
  }
  let obj={};
  const [data,setData]=useState(obj);
  let myAsyncFunction = async () => {
      await setData(form);
  };
  useEffect (()=>{
      myAsyncFunction();
  }, []);
  useEffect(() => {
  console.log(data);
  },[data]);

  return (
    <div className="App">
      <h1 >React-App</h1>
      <div style={{ textAlign: 'right' }} >

        <button className='product_btns'><GetApp /></button>
        <button className='product_btns' onClick={handleClickOpen}><AddIcon /></button>
        <button className='product_btns'><RefreshIcon /></button>
        <button className='product_btns' ><PublishIcon /></button>
      </div>
      <div className="ag-theme-alpine" style={{ height: '400px' }}>
         <AgGridReact
          rowData={tableData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        />
        
      </div>
      <FormDialog  />
    </div >
  );
}
export default App;