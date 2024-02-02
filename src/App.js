import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './component/SignUp';
import Login from './component/Login';
import Forgotpassword from './component/Forgotpassword';
import Medicine from './component/Medicine';


function App() {
  return (

    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/fpass' element={<Forgotpassword />}></Route>
        <Route path='/dashboard' element={<Medicine />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
