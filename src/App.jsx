import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import database from "./db.json"
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";


function App() {
  //  const [dataBase,setDataBase]=useState([])
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
       <AddStudent/>
      }}>Add a new student
      
      </button>
      <ShowStudents/>
      {/* database={database} */}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;