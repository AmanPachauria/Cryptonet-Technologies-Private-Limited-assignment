import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=4&seed=abc');
        setUsers(response.data.results);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-wrap justify-center">
        {users.map((user, index) => (
          <div key={index} className="max-w-md rounded overflow-hidden shadow-lg bg-white m-4 flex">
            <div className="w-1/3 pt-5">
              <img className="w-full" src={user.picture.large} alt="User" style={{height: 'auto', width: '100%'}} />
            </div>
            <div className="w-2/3 px-6 py-3 flex flex-col justify-between">
              <div>
                <p className="font-bold text-2xl mb-2">{`${user.name.first} ${user.name.last}`}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Gender:</strong> {user.gender}</p>
                <p><strong>Age:</strong> {user.dob.age}</p>
                <p><strong>Location:</strong> {`${user.location.city}, ${user.location.country}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
