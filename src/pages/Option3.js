
import axios from 'axios'

// import Layout2 from '../components/layout/Layout2'
import React, {useState, useEffect} from 'react'
function Option3() {
  const [searcher, setSearcher] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const result = await axios.get('http://localhost:8080/users');
        setData(result.data);
    };

   

    const handleChange = (e) => {
        setSearcher(e.target.value);
    };

    const filteredUsers = data.filter((user) =>
        user.class?.toLowerCase().includes(searcher.toLowerCase())
    );

  return (
    <div className='container mt-5'>
    <input className='search' type="text" placeholder="Search with fullName..." value={searcher} onChange={handleChange} />
    <table>
        <thead>
            <tr>
                <th>ID</th>
                
                <th>Class</th>
            </tr>
        </thead>
        <tbody>
            {filteredUsers.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    
                    <td>{user.class}</td>
                    
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default Option3
