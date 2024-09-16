import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./routes/Home.tsx";
import About from './routes/About.tsx';
import Contact from './routes/Contact.tsx';
import App from './App.tsx'
import Shop from './routes/Shop.tsx';
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route,} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<App/>}>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/shop" element = {<Shop/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path ="/contact" element = {<Contact/>}/>

    </Route>
  )
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
