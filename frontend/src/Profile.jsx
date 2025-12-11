import "./Profile.css";
function Profile({ user }) {
  return (
  <div id="overlay">
    <div id="profile-container">
      <h1>Profile</h1>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <p>Profile page content goes here...</p>
    </div>
  </div>
  );
}

export default Profile;
