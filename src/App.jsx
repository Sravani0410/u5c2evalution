import { useState } from "react";
import { useEffect } from "react";
import database from "./db.json"
import React from "react"
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";


function App() {
    const [dataBase,setDataBase]=useState(false)
  // useEffect(()=>{
  //   fetch(`http:localhost:8080/students`)
  //   .then(response=>response.json())
  //   .then(data=>{
  //     setDataBase(data)
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
  // },[])
  // const database=[
  //   {
  //     ID:"id",
  //     Firstname:"first_name",
  //     Lastname:"last_name",
  //    Email: "email",
  //     Gender:"gender",
  //    Age: "age",
  //    TenthScore:"tenth_score",
  //    TwelthScore:"twelth_score",
  //    name:"preferred_branch"
  //   }]
  return (
    <div className="App">
      
      <button className="togglebtn" onClick={()=>{
       setDataBase(!dataBase)
      }}>Add a new student
    
      </button>
      {dataBase? <AddStudent />:<ShowStudents />}
      {/* database={database} */}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;