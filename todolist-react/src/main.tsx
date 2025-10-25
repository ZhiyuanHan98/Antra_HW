import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import API from './utils/api.ts'

const data = await API.getTodos();
console.log(data);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App data={data}/>
  </StrictMode>,
)
