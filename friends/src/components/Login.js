import React, {useState} from 'react';
import axios from 'axios'

const initialState = {
  username: "",
  password: ""
}

export const Login = () => {

  const [credentials, setCredentials] = useState(initialState)

  const handleChange = e => {
      setCredentials({
        credentials: {
          ...credentials,
          [e.target.name]: e.target.value
        }
      })};

      const login = e => {
        e.preventDefault();
        // make a post request to the login endpoint on the server
        axios
          .post("http://localhost:5000/api/login", credentials)
          .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.payload);
            // redirect the user to the app's main logged in page
            this.props.history.push("/protected");
          })
          .catch(err => console.log({ err }));
      };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          value={credentials.username}
          onChange={handleChange}
          />
        <input
          type="password"
          value={credentials.password}
          onChange={handleChange}
          />
          <button>Login</button>
      </form>
    </div>

  )
}