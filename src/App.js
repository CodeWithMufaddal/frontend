import React, { useRef } from 'react'
import './App.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Login from './Components/Auth/Login';
import ProtectedRoute from './ProtectedRoute';
import Main from './Components/Home/Main';
import Navbar from './Components/Home/Navbar';
import Inward from './Components/Home/Inward';
import ReactToPrint from 'react-to-print';
import InwardHistory from './Components/Home/InwardHistory';
function App() {
  const naviget = useNavigate()

  return (
    <div className="App ">
      <Routes>
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/f" element={<ProtectedRoute>
          <div className="container ">
            <Login />
          </div>
        </ProtectedRoute>
        } />

        <Route path="/" element={<ProtectedRoute>
          <div className="_a3gq">
            <div className="formPage">
              <Navbar />
            </div>
            <Main />
          </div>
        </ProtectedRoute>
        } />

        <Route path="/inwardHistory" element={<ProtectedRoute>
          <div className="_a3gq">
            <div className="formPage">
              <Navbar />
            </div>
            <InwardHistory />
          </div>
        </ProtectedRoute>
        } />


      </Routes>
    </div >
  );
}

export default App;
