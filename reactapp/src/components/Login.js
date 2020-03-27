import React, { useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { useHistory } from "react-router-dom";


export default function Login() {

  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const handleChanges = e => {
    setUser({ 
        ...user, 
        [e.target.name]: e.target.value 
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post("api/auth/login", user)
      .then(res => {
        console.log("login response", res);
        localStorage.setItem("token", res.data.token);
        history.push("/users");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>Login Here</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="username"
          onChange={handleChanges}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          onChange={handleChanges}
        />
        <button>
          Login!
        </button>
      </form>
      <Link href="/register">
        Sign Up Here
      </Link>
    </div>
  );
}