
import './App.css'
import { Content } from './components/Content';
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  const user = {
    name: 'abishek',
    age: 21,
    profession: 'Fisherman'
  };

  return (
    <>
    
     {/* Passing an object as a prop */}

    <Header/>
     <Content user={user} /> 
    
   
    <Footer/>

    </>
  )
}

export default App
