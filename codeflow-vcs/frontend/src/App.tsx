import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login'; 
import SignUpPage from './pages/SignUp';
import DashboardPage from './pages/Dashboard';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
