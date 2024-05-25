import React from "react";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });
  console.log(form);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("https://localhost:7199/api/users/login", form);
      localStorage.setItem("accessToken", data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={form.login}
            onChange={(event) =>
              setForm({ ...form, login: event.target.value })
            }
            placeholder="login"
          />
          <input
            type="password"
            value={form.password}
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
            placeholder="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
