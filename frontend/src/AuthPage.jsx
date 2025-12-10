import { useState } from "react";
import axios from "axios";
import "./AuthPage.css"; // import the CSS file

function AuthPage({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  // Signup handler
  const handleSignup = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/users/signup/", form);
      alert(res.data.message);
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  // Login handler
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/users/login/", form);
      alert(res.data.message);
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="title">Signup / Login</h2>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input-field"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input-field"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="input-field"
        />

        <div className="btn-container">
          <button className="btn" onClick={handleSignup}>Signup</button>
          <button className="btn login-btn" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
