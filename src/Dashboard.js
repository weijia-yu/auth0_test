import { useAuth0 } from '@auth0/auth0-react';

function Dashboard() {
  const { user, logout, isAuthenticated } = useAuth0();
  console.log(user);
  return isAuthenticated ? (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </button>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Dashboard;
