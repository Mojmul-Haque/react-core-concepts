import React, { createContext, useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'

export  const UpdateCount = createContext()

function App () {
  const [category, setCategory] = useState(0)
  return (
    <UpdateCount.Provider value ={[category,setCategory]}>
      <Home></Home>
      <Header></Header>
      <Footer></Footer>
    </UpdateCount.Provider>
  )
}

export default App
