import { useState } from 'react'

import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { sidebarData } from './util/util'

function App() {

  return (
    
    <main >
      <Sidebar sidebarData={sidebarData} />

      <Outlet />
    </main>


  )
}

export default App
