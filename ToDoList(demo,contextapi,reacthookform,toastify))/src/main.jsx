import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import './index.css'
import App from './App.jsx'
import TodoContext from './context/TodoContext.jsx'

createRoot(document.getElementById('root')).render(
    <TodoContext >
    <App />
    <ToastContainer />
    </TodoContext>
)
