import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cat from "../../assets/images/catbanner.webp";
const Record = (props) => (
 <tr>
   <td><Link className="mylink" to={`viewcat/${props.record._id}`}>{props.record.breed}</Link></td>
   <td>{props.record.location}</td>
   <td>{props.record.lifespan}</td>
   <td>{props.record.size}</td>
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
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/cats/`);
 
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
 
 // This method will delete a record
 
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
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
 
 // This following section will display the table with the records of individuals.
 return (
   <div style={{margin:"100px"}}>
      <br/>
      <center>
     <h1>Cats</h1><br/>
      <br/><br/><div className="dogims">
      <img src={Cat} alt="pic" style={{ maxHeight: "300px", borderRadius:"9px" }}/>
      
      </div></center>
      <br/><br/>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Breed</th>
           <th>Location</th>
           <th>LifeSpan</th>
           <th>Size</th>
           <th>Image</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}
