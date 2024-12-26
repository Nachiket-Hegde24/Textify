import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// inside return tag is called as jsx 

// let Username = prompt('Enter name');

// props used here to use Navbar function but making small changes
function App() {
  const [Mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  console.log(Mode)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }

    const toggleMode = () => {
      if (Mode === 'dark') {
        setMode('light');
        showAlert('Light Mode has been enabled', 'success');
      }
      else {
        setMode('dark');
        showAlert('Dark Mode has been enabled', 'success');
      }
    }

    if (Mode === 'light') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    else {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }

    return (
      <>
        {/* while using react-router, check the docs  */}
        <Navbar title="Textify" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <TextForm heading="Enter Text Below !!" mode={Mode} showAlert={showAlert} />
          <hr />
          <About mode={Mode} />
        </div>
      </>
    );
  }

  export default App;
