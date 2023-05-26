// import React from "react";
// import { useState } from "react";
// import New from './New';

// function main(){
    
//     const [tableData, setTableData] = useState([]);
//     const [InputData, setInputData] = useState({Name :'', University:'', Subject:'', Gender:'' })

//     const handleChange=(e)=>{
//         const newInput  =(data)=> ({...data,[e.target.name]:e.target.value})
//         setInputData(newInput);
//     }

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         const checkEmptyInput = !Object.values(InputData).every(res => res==="")
//         if(checkEmptyInput){
//             const newData = (data) => ([...data,InputData]);
//             setTableData(newData);
//             const emptyInput = {Name :'', University:'', Subject:'', Gender:''}
//             setInputData(newData);
//         }
//     }

//     return(
//         <New  handleChange={handleChange} handleSubmit={handleSubmit}></New>
//     )
// }