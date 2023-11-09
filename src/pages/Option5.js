import React,{useEffect, useState} from 'react'
// import Layout2 from '../components/layout/Layout2'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


function Option5() {

  const {id} = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    
    axios.get('http://localhost:8080/users/'+id)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[id])

  function handleSubmit(e){
    e.preventDefault();
    axios.put('http://localhost:8080/users/'+id,data)
    .then(res=>{
      alert("Update Successfull");
      navigate('/teacher-portal/option1');
    })
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center' >
       <div className='w-50 border bg-light p-5'>
           <form onSubmit={handleSubmit}>
           <div>
              <label htmlFor='name'>ID: </label>
              <input type='text' name='name'  className='form-control' value={data.id}  />
            </div>
           <div>
              <label htmlFor='name'>Username: </label>
              <input type='text' name='name' className='form-control' value={data.username} onChange={e=>setData({...data, username:e.target.value})}/>
            </div>
           <div>
              <label htmlFor='name'>Name: </label>
              <input type='text' name='name' className='form-control'  value={data.name} onChange={e=>setData({...data, name:e.target.value})}/>
            </div>
            <div>
              <label htmlFor='email'>Email: </label>
              <input type='email' name='email' className='form-control' value={data.email} onChange={e=>setData({...data, email:e.target.value})}/>
            </div>
            <div>
              <label htmlFor='name'>Image: </label>
              <input type='text' name='name' className='form-control' value={data.image} onChange={e=>setData({...data, image:e.target.value})}/>
            </div>
            <br />
            <button className='btn btn-info'>Submit</button>
           </form>
       </div>
    </div>
  )
}

export default Option5
