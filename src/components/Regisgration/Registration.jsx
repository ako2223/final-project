import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

function Registration() {
    const [form, setForm] = useState({
        userName: '',
        email: '',
        password:''
    });
    const navigate = useNavigate();

    const postNewUser = async (e) => {
e.preventDefault();
try {
const resp = await axios.post("http://localhost:8000/register", form);
console.log(resp);
const userData = await resp.data.user;
const accessToken = await resp.data.accessToken;
localStorage.setItem('accessToken', accessToken);
localStorage.setItem('userData', JSON.stringify(userData))
} catch(error) { console.log('error', error)};
navigate('/user')
    }
    return (
        <form onSubmit={postNewUser}>
<input placeholder='UserName' value={form.userName} onChange={(e) => setForm({...form, userName: e.target.value})}/>
<input placeholder='email'value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
<input placeholder='Password' type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
<button type="submit">Register</button>

        </form>
    )
}

export default Registration
