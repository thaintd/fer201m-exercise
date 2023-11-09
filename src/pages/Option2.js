
import axios from 'axios'

// import Layout2 from '../components/layout/Layout2'
import React, {useState, useEffect} from 'react'
function Option2() {
  const [columns, setColumns] = useState([])
  // const [records, setRecords] = useState([])
  const [studentRecords, setStudentRecords] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/users')
    .then(res=>{
      setColumns(Object.keys(res.data[0]));
      // setRecords(res.data);
      const studentData = res.data.filter(user => user.role === 'STUDENT');
      setStudentRecords(studentData);
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
                  <th>Class</th>
                </tr>
               </thead>
               <tbody>
                {
                  studentRecords.map((d,i)=>(
                    <tr key={i}>
                      <td>{d.id}</td>
                      <td>{d.username}</td>
                      <td>{d.role}</td>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.image}</td>
                      <td>{d.class}</td>
                    </tr>
                  ))
                }
               </tbody>
        </table>


     </div>
  )
}

export default Option2
