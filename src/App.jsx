import { Toaster } from 'react-hot-toast';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { sidebarData } from './util/util'

function App() {

  return (

    <main >
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
        }}
      />
      <Sidebar sidebarData={sidebarData} />

      <Outlet />
    </main>


  )
}

export default App
