import { useState } from "react";
import axios from "axios";
import "./AuthPage.css";

function AuthPage({ setUser }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/users/signup/", form);
      alert(res.data.message);
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/users/login/", form);

      alert(res.data.message);
      setUser(res.data.user); // ✅ save user info in parent state
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h2 id="Auth_heading">Signup / Login</h2>

       <div> 
        <div><label htmlFor="name">Name :</label> </div>
        <div><input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /> </div>
       </div>
       <div>
        <div><label htmlFor="email">Email :</label></div>
        <div><input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
        </div>
       <div>
        <div><label htmlFor="password">Password : </label></div>
        <div><input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /> </div>
        </div>
        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

        <div className="button-row">
          <button className="Auth_btn" onClick={handleSignup}>Signup</button>
          <button className="Auth_btn" onClick={handleLogin}>Login</button>
        </div>

      </div>
    </div>
  );
}

export default AuthPage;
