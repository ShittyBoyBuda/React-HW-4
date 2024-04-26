import { useEffect, useState } from 'react'

function UserList () {
    const [user, setUser] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUser(data);
      };
      fetchData();
    }, []);
    
    return (
      <div className='users'>
        <h1>Юзеры👇</h1>
        <p>{user.map(users => (
          <p key={users.id}>{users.name}</p>
        ))}</p>
      </div>
    )
}

export default UserList;