import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import Error from './pages/Error';
import MainContent from './pages/MainContent';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { aboutData } from './util/util';


const router = createBrowserRouter([
  // user routes
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <MainContent />,
        children: [
          {
            path: "",
            element: <About data={aboutData} />
          },
          {
            path: "resume",
            element: <Resume data />
          },
         
          {
            path: "contact",
            element: <Contact />
          },
          {
            path: "portfolio",
            element: <Portfolio />
          },
         
        ]
      },

    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
