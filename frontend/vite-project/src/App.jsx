import React from 'react'
import './App.css'
import Delete from './components/Delete'
import Register from './components/Register'
import Update from './components/Update'
import View from './components/View'
const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor: 'greenyellow',height:'50px',lineHeight:'50px'}}>User Registration System</h1>
      <Register/>
      <Update/>
      <Delete/>
      <View/>
    </div>
  )
}

export default App