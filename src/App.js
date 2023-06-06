
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
//import Start from './components/Start';
import Register from './components/Register';
import Pan from './components/Pan';
import Loger from './components/Loger';
import Cat from './components/Cat';
import Admin from './components/Admin';
import Orders from './components/Orders';
import Order from './components/Order';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="/order" element={<Order/>} />
      <Route path="Register" element={<Register />} />
      {/* <Route path="Start" element={<Start />} /> */}
      <Route path="Loger" element={<Loger />} />
      <Route path="Cat" element={<Cat />} />
      <Route path="Pan" element={<Pan />} />
      <Route path="Admin" element={<Admin />} />
    </Routes>
    
    )  
}

export default App;
