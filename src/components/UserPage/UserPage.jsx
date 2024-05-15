import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";


function UserPage() {

    const [userData, setUserData] = useState('');
    const [token, setToken] = useState('');
    useEffect(() => {
       setUserData(JSON.parse(localStorage.getItem('userData')));
       setToken(localStorage.getItem("accessToken"));
    },[])
    
    return (
      <>
        {token ? (
          <div>
            <h1>success registration</h1>
            <div>
              <h3>{userData?.userName}</h3>
            </div>
          </div>
        ) : (
          <div>
            <h1>Пройдите регистрацию</h1>
            <Link to={'/regist'}>Regist</Link>
          </div>
        )}
      </>
    );
}

export default UserPage
