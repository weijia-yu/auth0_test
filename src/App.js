import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import { useAuth0 } from '@auth0/auth0-react';


function App() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <button onClick={() => loginWithRedirect({
            authorizationParams: {
              connection: 'google-oauth2',
              redirect_uri: 'http://localhost:3000/dashboard'
            }
          })}>
            Login with Google
          </button>
        }/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
