import React,{Fragment} from 'react'
import './App.css';
import Login from './Components/Authentication/Login/Login'
import Signup from './Components/Authentication/Signup/Signup';
import NotFoundPage from './Components/404/NotFoundPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
   <Router>
    <Routes>
      <Route path="*" Component={NotFoundPage}/>
      <Route path="/" Component={Signup}/>
      <Route path="/login" Component={Login}/>
    </Routes>
   </Router>
  );
}

export default App;
