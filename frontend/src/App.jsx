import { useState } from "react";
import AuthPage from "./AuthPage";

function App() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div>
      <button onClick={() => setShowAuth(true)}>Open Auth</button>
      {showAuth && <AuthPage onClose={() => setShowAuth(false)} />}
    </div>
  );
}

export default App;
