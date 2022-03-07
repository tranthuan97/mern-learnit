import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import PageNotFound from './components/PageNotFound';
import LandingPage from './pages/LandingPage';
import { loadUser } from 'reducers/authReducer';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthLayout authRoute="login" />} />
        <Route path="/register" element={<AuthLayout authRoute="register" />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
