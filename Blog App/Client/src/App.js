import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Authentication/Login/Login';
import Signup from './Components/Authentication/Signup/Signup';
import NotFoundPage from './Components/404/NotFoundPage';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  if (loading) {
    // Render loading indicator if useEffect is still running
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Redirect to Dashboard if token exists, else to Login */}
        <Route
          path="/"
          element={token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />

        {/* Other routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
