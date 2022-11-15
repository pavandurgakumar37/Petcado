import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Doggy from "../../assets/images/dogbanner.jpeg";
const Record = (props) => (
 <tr>
   <td><Link className="mylink" to={`viewdog/${props.record._id}`}>{props.record.breed}</Link></td>
   <td>{props.record.location}</td>
   <td>{props.record.lifespan}</td>
   <td><img
      src={props.record.image}
      alt="home pic"
      className="img-fluid"
      style={{ maxHeight: "100px" }}
    /></td>
   
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/dogs/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 return (
   <div style={{margin:"90px"}}>
     <br/>
      <center>
     <h1>Dogs</h1><br/>
      <br/><br/><div className="dogims">
      <img src={Doggy} alt="pic" style={{ maxHeight: "300px", borderRadius:"7px" }}/>
      
      </div></center>
      <br/><br/>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Breed</th>
           <th>location</th>
           <th>LifeSpan</th>
           <th>Image</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}