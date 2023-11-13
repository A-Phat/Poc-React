// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { Outlet } from 'react-router-dom'
import {routes} from './routes/Routes.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(routes);

function App() {
  // const [count, setCount] = useState(0)
  return (
   <RouterProvider router={router} />
  )
}

export default App
