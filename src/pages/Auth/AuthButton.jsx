import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthButton() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (token) {
      setIsLoggedIn(true);
      const decodedToken = decodeToken(token); 
      setUsername(decodedToken.username);
    }
  }, []);

  const handleClick = () => {
    if (isLoggedIn) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const decodeToken = (token) => {
    return { username: 'testuser' };
  };

  return (
    <button onClick={handleClick} style={{
        boxShadow:'none',
        border:'none',
        backgroundColor:'inherit'
      }}>
      {isLoggedIn ? username : <img src="src\assets\img\user.svg" style={{
              width:'27px'
            }}></img>}
      
    </button>
  );
}

export default AuthButton;