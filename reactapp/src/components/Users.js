import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import { useHistory } from 'react-router-dom';

export default function Users() {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        AxiosWithAuth()
        .get('/api/user')
        .then(res => {
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return (
        <div>
            <h2>Users Here</h2>
            <div>
                {users.map(user => {
                    <div>
                        <h4>{user.username}</h4>
                    </div>
                })}
            </div>
        </div>
    )
}