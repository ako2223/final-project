import React from "react";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  console.log(form);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/login", form);
      localStorage.setItem("accessToken", data.accessToken);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            placeholder="email"
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
