import React from 'react';
import Header from './components/Header';
// import Footer from './Components/Footer'
import './App.css'; 
import { Weather } from './Components/Weather';

const App = () => {
  return (
    <div>
      <Header />
      <Weather/>
    
      {/* <Footer/> */}
    </div>
  );
}

export default App;
