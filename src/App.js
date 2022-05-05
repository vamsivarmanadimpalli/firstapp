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


const App = (props) => {
  // const [rowData, setRowData] = useState(userData);
  const [gridApi, setGridApi] = useState(null)
  // const [tableData, setTableData] = useState(userData)
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
const [tableData, setTableData] = useState([
  {id:"1",name:"vamsi",name2:"Bata",number:"45667565685"},
  {id:"2",name:"varma",name2:"Puma",number:"78857875"},
  {id:"3",name:"sai",name2:"puma",number:"655753373"},
  {id:"4",name:"raju",name2:"Bata",number:"26537573757"},
  {id:"5",name:"suresh",name2:"puma",number:"545735354"},
  {id:"6",name:"varma",name2:"Bata",number:"876543"},
  {id:"7",name:"bh",name2:"puma",number:"123456"},
  {id:"8",name:"n",name2:"Bata",number:"265375757"},
  {id:"9",name:"vamsi",name2:"puma",number:"2653757357"}
])
  
  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name", },
    { headerName: "Brand", field: "name2", },
    { headerName: "ID Number", field: "number" }
  ]

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

  const refreshpage=()=>{
window.location.reload();
  }

  return (
    <div className="App">
      <h1 >React-App</h1>
      <div style={{ textAlign: 'right' }} >

        <button className='product_btns'><GetApp /></button>
        <button className='product_btns'  onClick={props.handleClose}><AddIcon /></button>
        <button className='product_btns' onClick={refreshpage}><RefreshIcon /></button>
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
      {/* <FormDialog  /> */}
    </div >
  );
}
export default App;