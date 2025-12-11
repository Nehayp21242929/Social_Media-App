import { useState } from "react";
import AuthPage from "./AuthPage";
import Profile from "./Profile";

function App() {
  const [user, setUser] = useState(null); // stores logged-in user

  return (
    <div>
      {user ? (
        <Profile user={user} /> // if logged in, show profile
      ) : (
        <AuthPage setUser={setUser} /> // else show login/signup
      )}
    </div>
  );
}

export default App;
