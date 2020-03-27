import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import axios from 'axios';

export default function Register() {
    const history = useHistory();

    const [newUser, setNewUser] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e => {
        e.preventDefault();
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:3300/api/auth/register', newUser)
            .then(res => {
                history.push('/');
            })
            .catch(err => {
                console.log(err)
            });
            
    }
       


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                name='username'
                value={newUser.username}
                onChange={handleChanges}
                /> 

                <input
                name='password'
                type="password"
                value={newUser.password}
                onChange={handleChanges}
                /> 
                <button>Register</button>
            </form>
            <Link href='/'>Login Here</Link>
        </div>
    )
}

