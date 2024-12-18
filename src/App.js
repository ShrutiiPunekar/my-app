import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';

// import {
//   BrowserRouter,
//   Routes,
//   Route
// }from "react-router-dom";


// WIT Route
// import WIT3 from './components/WIT3';
// import WIT from './components/WIT';


function App() {

  const [mode, setMode] = useState('light');     //Wether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{    //showAlert is user defined method in that setAlert is used to update state of alert (setAlert is used as object)
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toogleMode = ()=>{              //toogleMode is user defined method in that setMode is used to update state of mode
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtilis - Dark Mode";

      // setInterval(() => {                                          //Website Realoding again and again
      //   document.title = "TextUtilis is Amazing Mode";
      // },2000);

      // setInterval(() => {
      //   document.title = "Install TextUtilis Now";
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtilis - Light Mode";
    }
  }


  return (
<>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" aboutText="About TexyUtils" mode={mode} toggleMode={toogleMode}/>
    <Alert alert={alert}/>
    
    <div className="container my-3">


          {/* <Routes> */}
         
          {/* <Route exact path="About" element={<About/>}></Route>
          <Route exact path="/" element={ */} <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> {/* } ></Route>
          </Routes> */}
          
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;









{/* WIT Route */}
{/* <Route exact path="/" element={<WIT/>}></Route>
    <Route exact path="/WIT3" element={<WIT3/>}></Route> */}




    // using exact path
    // /users        --->component1
    // /users/home   --->component2

















/* Already Written Code
import logo from './logo.svg';



    <>
    <h1>This is me</h1>
    <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Shruti
        </a>
      </header>
    </div>
    </>
*/