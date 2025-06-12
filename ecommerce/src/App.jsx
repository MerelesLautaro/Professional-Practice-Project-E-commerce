import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestOtp from './components/RequestOtp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/send-otp" element={<RequestOtp />} />
      </Routes>
    </Router>
  );
}

export default App;