
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  const name ="React"
  const theme="dark"


  return (
    <>
    <Header name={name} theme={theme}/>
    <Footer name={name} theme={theme}/>

    </>
  )
}

export default App
