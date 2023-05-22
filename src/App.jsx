import { useState } from 'react'


import './App.css'
import Home from './page/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <ToastContainer />
    </>
  )
}

export default App
