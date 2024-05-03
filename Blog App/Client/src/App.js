import React,{Fragment} from 'react'
import './App.css';
import Login from './Components/Authentication/Login/Login'
import Signup from './Components/Authentication/Signup/Signup';
function App() {
  return (
   <Fragment>
    {/* <Signup/> */}
    <Login/>
   </Fragment>
  );
}

export default App;
