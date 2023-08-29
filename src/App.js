import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [themeColor, setThemeColor] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleThemeColor = () => {
    if (themeColor === 'light') {
      setThemeColor('dark');
      document.body.style.backgroundColor = "#292c32";
      showAlert("Dark Mode has been Enabled", "success")
    } else {
      setThemeColor('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={themeColor} toggleThemeColor={toggleThemeColor} />
        <Alert alert={alert} />
        <div className="container  my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={themeColor}/>} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={themeColor} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
