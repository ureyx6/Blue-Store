import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./routes/Home.tsx";
import Contact from './routes/Contact.tsx';
import App from './App.tsx'
import Shop from './routes/Shop.tsx';
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route,} from "react-router-dom";
import NavbarLogin from './components/NavbarLogin.tsx';
import Login from './routes/Login.tsx';
import Dashboard from './routes/Dashboard.tsx';
import SignUp from './routes/SignUp.tsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path = "/" element = {<App/>}>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/shop" element = {<Shop/>}/>
      <Route path ="/contact" element = {<Contact/>}/>

    </Route>
    <Route path = "/login" element = {<NavbarLogin/>}>
      <Route path = "/login" element = {<Login/>}></Route>
    </Route>
    <Route path ="/dashboard" element ={<NavbarLogin/>}>
      <Route path ="/dashboard" element ={<Dashboard/>}></Route>
    </Route>
    <Route path ="/signup" element = {<NavbarLogin/>}>
      <Route path ="/signup" element = {<SignUp/>}>
    </Route>
    </Route>
    </>
  )
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <RouterProvider router = {router} />
  </StrictMode>,
)
