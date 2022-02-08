import React, {useState, useEffect} from 'react';
import './App.css';
import Meals from './Components/Meals/Meals';
import Auth from './Components/Auth/Auth';
// import { Footer } from 'reactstrap';

function App() {

  const [ sessionToken, setSessionToken ] = useState(undefined)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
  })

  const updateLocalStorage = newToken => {
    localStorage.setItem("token", newToken)
    setSessionToken(newToken)
  }

  const clearLocalStorage = () => {
    localStorage.clear()
    setSessionToken(undefined)
  }

  const viewer = () => {
    return sessionToken !== undefined ? 
    <Meals sessionToken={sessionToken} updateLocalStorage={updateLocalStorage} clearLocalStorage={clearLocalStorage}/> 
    : <Auth updateLocalStorage={updateLocalStorage} />
  }

  return (
    <div className='App'>
      {viewer()}
    </div>
  );
}

export default App;