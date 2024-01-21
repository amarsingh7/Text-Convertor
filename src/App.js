import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1400)
  }

  const toggleMode= ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#111b5e';
      showAlert(`${mode.charAt(0).toUpperCase() + mode.slice(1)} mode is enabled`, 'success');
      document.title= 'Text Convertor- Dark';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert(`${mode.charAt(0).toUpperCase() + mode.slice(1)} mode is enabled`, 'success');
      document.title= 'Text Convertor- Dark';
    }
  }
  
  return (
    <>
    <Router>
     <Navbar title="React App" about="About" home="home" mode= {mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <TextForm heading="Text Convertor" mode= {mode} showAlert={showAlert}/>
     {/* <About/> */}
     {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      
      <div className="container my-3" mode={mode}>
      
        <Routes>
          <Route path="/" element={<title />} /> 
          <Route path="/home" element={<home />} /> 
        </Routes>
        <Routes>
          <Route path="/about" element={<About/>} /> 
        </Routes>
      </div>
    </Router>
    </>
    
  );
}

export default App;

