import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div >
        {user && (
          <div className="flex">
            <div className="w-1/3">
              <img className="w-full" src={user.picture.large} alt="User" style={{height: 'auto', width: '100%'}} />
            </div>
            <div className="w-2/3 px-6 py-4 ">
              <p className="font-bold text-2xl mb-2">{`${user.name.first} ${user.name.last}`}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <p><strong>Age:</strong> {user.dob.age}</p>
              <p><strong>Location:</strong> {`${user.location.city}, ${user.location.country}`}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
