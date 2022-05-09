import  React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

const FormDialog = () => {
    const [open, setOpen] = React.useState(true);
    
    const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Create new user
                </DialogTitle>
                <DialogContent>
                    <form>
                        <TextField id="name" placeholder="Enter name" lable="name" style={{width:'100%'}} />
                        <TextField id="Categories" placeholder="Enter name" lable="name"  style={{width:'100%'}} />
                        <TextField id="Brand" placeholder="Enter name" lable="name"  style={{width:'100%'}} />
                        <TextField id="Unit Size" placeholder="Enter name" lable="number"  style={{width:'100%'}} />
                        <TextField id="Measuring Unit" placeholder="Enter name" lable="number"  style={{width:'100%'}} />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button autoFocus onClick={handleClose}>
                        Submit
                    </Button>
                </DialogActions> 
            </Dialog>



        </div>
    );
}
export default FormDialog;




// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// function  InputDialog(open,handleClose) {


//   return (
//     <div> 
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Let Google help apps determine location. This means sending anonymous location data to
//             Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Back
//           </Button>
//           <Button color="primary" autoFocus>
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
// export default InputDialog;




// import React, { useEffect, useState } from 'react';
// import { AgGridColumn, AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import PublishIcon from '@material-ui/icons/Publish';
// import AddIcon from '@material-ui/icons/Add';
// import RefreshIcon from '@material-ui/icons/Refresh';
// import { GetApp, Home } from '@material-ui/icons';
// import FormDialog from '../Components/FormDialog';
// import InputDialog from '../Components/InputDialog';
// import form from '../Components/form.json';
// import './HomePage.css';

// const HomePage = (props) => {
//   // const [rowData, setRowData] = useState(userData);
//   const [gridApi, setGridApi] = useState(null);
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
// const [tableData, setTableData] = useState([
//   {"id":"1","name":"vamsi","name2":"Bata","number":"45667565685"},
//   {"id":"2","name":"varma","name2":"Puma","number":"78857875"},
//   {"id":"3","name":"sai","name2":"puma","number":"655753373"},
//   {"id":"4","name":"raju","name2":"Bata","number":"26537573757"},
//   {"id":"5","name":"suresh","name2":"puma","number":"545735354"},
//   {"id":"6","name":"varma","name2":"Bata","number":"876543"},
//   {"id":"7","name":"bh","name2":"puma","number":"123456"},
//   {"id":"8","name":"n","name2":"Bata","number":"265375757"},
//   {"id":"9","name":"vamsi","name2":"puma","number":"2653757357"}
// ])

//   const columnDefs = [
//     { headerName: "ID", field: "id" },
//     { headerName: "Name", field: "name", },
//     { headerName: "Brand", field: "name2", },
//     { headerName: "ID Number", field: "number" }
//   ]

// //   useEffect(()=>{
// //     getUsers()
// //   },[]);
  
// // const getUsers =()=>{
// //   fetch("http://localhost:4000/users")
// //   .then(resp=>resp.json())
// //   .then(resp=>setTableData(resp))
// // };
//   const onGridReady = (params) => {
//     setGridApi(params)
//   }
//   const defaultColDef = {
//     sortable: true,
//     flex: 1, filter: true,
//     floatingFilter: true
//   }
//   let obj={};
//   const [data,setData]=useState(obj);
 

//   const refreshpage=()=>{
// window.location.reload();
//   }

//   return (
//     <div className="App">
//       <h1 >React-App</h1>
//       <div style={{ textAlign: 'right' }} >

//         <button className='product_btns'><GetApp /></button>
//         <button className='product_btns'  onClick={handleClickOpen}><AddIcon /></button>
//         <button className='product_btns' onClick={refreshpage}><RefreshIcon /></button>
//         <button className='product_btns' ><PublishIcon /></button>
//       </div>
//       <div className="ag-theme-alpine" style={{ height: '400px' }}>
//          <AgGridReact
//           rowData={tableData}
//           columnDefs={columnDefs}
//           defaultColDef={defaultColDef}
//           onGridReady={onGridReady}
//         />
        
//       </div>
//       {/* <InputDialog open={open} handleClose={handleClose} /> */}
//       {/* <FormDialog  /> */}
//     </div >
//   );
// }
// export default HomePage;