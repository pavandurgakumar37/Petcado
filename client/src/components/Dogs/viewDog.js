import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Record = (props) => (
  <section className="profile">
    <div className="ims">
      <center>
      <img
        src={props.record.image}
        alt="dog"
        className="img-prof"
        style={{ Height: "500px" ,Width:"500px", borderRadius:"5px"}}
      /></center>
      <div className="motham">
      <div className="dets">
            <p><b>Breed : </b>{props.record.breed}</p>
            <p><b>Location : </b>{props.record.location}</p>
            <p><b>Height : </b>{props.record.height}</p>
            <p><b>Weight : </b>{props.record.weight}</p>
            <p><b>Popularity :</b>{props.record.popularity}</p>
            <p><b>LifeSpan : </b>{props.record.lifespan}</p>
            </div>
        <div className="dogprice">
          <button className="btn btn-secondary"> <a className="konu"  href={`${props.record.buy}` || "#"}>Click here to buy</a></button>
        </div>
      </div>
    </div>
    <div className="matter">
      <p>{props.record.matter}</p>
    </div>
  </section>
);
 
export default function RecordList() {
  const {id} = useParams();
  console.log(id);
const [records, setRecords] = useState([]);
//eslint-disable-next-line
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/dogs/viewdog/${id}`);
      console.log(response);
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;// eslint-disable-next-line
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
         key={record.breed}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div style={{margin:"80px"}}>
     <br/>
     <br/>
     <p>{recordList()}</p>
   </div>
 );
}
