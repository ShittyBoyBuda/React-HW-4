import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Timer from './components/CountdownTimer.jsx'
import UserList from './components/UserList.jsx'
import WindowSize from './components/WindowSize.jsx'
import './App.css'

function App() {
  return (
    <>
      <div className='app'>
          <Timer/>
          <UserList/>
          <WindowSize/>
      </div>
    </>
  )
}

export default App
