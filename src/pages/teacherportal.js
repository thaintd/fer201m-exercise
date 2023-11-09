import Layout2 from '../components/layout/Layout2.jsx'
import React from 'react'
// import Option1 from './Option1.js'
// import Option2 from './Option2.js'
// import Option3 from './Option3.js'
// import Option4 from './Option4.js'
// import Option5 from './Option5.js'
import {  Outlet } from 'react-router-dom'

const teacherportal = () => {

  
  return (
    
      <div>
        <Layout2>
        {/* <Routes >
            <Route path="/teacher-portal" component={Option1} />
            <Route path="/teacher-portal/option1" element={<Option1 />} />
            <Route path="/teacher-portal/option2" element={<Option2 />} />
            <Route path="/teacher-portal/option3" element={<Option3 />} />
            <Route path="/teacher-portal/option4" element={<Option4 />} />
            <Route path="/teacher-portal/option5" element={<Option5 />} />
            </Routes> */}

         <Outlet />
        </Layout2>
        
      </div>
      
  )
}

export default teacherportal
