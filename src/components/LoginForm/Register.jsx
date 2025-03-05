import React, { useEffect, useState } from 'react';


const UserList = () => {
  const [users, setUsers] = useState([]); // State to store the list of users
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }); // State to store new user information
  const [isUserExists, setIsUserExists] = useState(false); // State to track if the user already exists

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://dummyjson.com/users'); // Dummy API to get users
      const data = await response.json();
      setUsers(data.users); // Set users data
    };

    fetchUsers();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Handle user registration
  const handleRegistration = (e) => {
    e.preventDefault();

    // Check if the user already exists
    const userExists = users.some(
      (user) => user.email === newUser.email
    );

    if (userExists) {
      setIsUserExists(true); // Show error if user exists
    } else {
      setUsers([...users, newUser]); // Add the new user to the list
      setNewUser({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }); // Reset the form
      setIsUserExists(false);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
          </li>
        ))}
      </ul>

      <h2>Register New User</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={newUser.firstName}
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={newUser.lastName}
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={newUser.email}
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={newUser.password}
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Register</button>
      </form>

      {isUserExists && (
        <p style={{ color: 'red' }}>This user already exists. Please log in.</p>
      )}
    </div>
  );
};

export default UserList;
