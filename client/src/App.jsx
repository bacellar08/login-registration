import Cadastrar from "./Cadastrar";
import Cadastros from "./Cadastros";
import Dashboard from "./Dashboard";
import "./index.css"
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/cadastrar" element={<Cadastrar/>}></Route>
        <Route path="/cadastros" element={<Cadastros/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
