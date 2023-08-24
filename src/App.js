import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  const [themeColor, setThemeColor] = useState('light');

  const toggleThemeColor = () => {
    if (themeColor === 'light') {
      setThemeColor('dark');
      document.body.style.backgroundColor = "#292c32";
    } else {
      setThemeColor('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      {/* <Navbar  /> */}
      <Navbar title="TextUtils" mode={themeColor} toggleThemeColor={toggleThemeColor} />
      <div className="container  my-3">
        <TextForm heading="Enter the text to analyze" mode={themeColor}/>

        {/* <About/> */}

      </div>
    </>
  );
}

export default App;
