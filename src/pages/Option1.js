import axios from 'axios'

// import Layout2 from '../components/layout/Layout2'
import React, {useState, useEffect} from 'react'

import { Link } from "react-router-dom";


function Option1() {
   
  const [columns, setColumns] = useState([])
  // const [records, setRecords] = useState([])
  const [teacherRecords, setTeacherRecords] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/users')
    .then(res=>{
      setColumns(Object.keys(res.data[0]));
      // setRecords(res.data);
      const teacherData = res.data.filter(user => user.role === 'TEACHER');
      setTeacherRecords(teacherData);
    })
  },[])

  return (
     <div className='container mt-5'>
        <table className='table'>
               <thead>
                <tr>
                  {columns.map((c,i)=>(
                    <th key={i}>{c}</th>
                  ))}
                  <th>Action</th>
                </tr>
               </thead>
               <tbody>
                {
                  teacherRecords.map((d,i)=>(
                    <tr key={i}>
                      <td>{d.id}</td>
                      <td>{d.username}</td>
                      <td>{d.role}</td>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.image}</td>
                      <td>
                      {/* /${d.id} */}
                        <button>
                          <Link to={`/teacher-portal/option5/${d.id}`}>Update </Link>
                        </button>
                      </td>
                    </tr>
                  ))
                }
               </tbody>
        </table>


     </div>
  )
}

export default Option1
