import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import Main from './components/Main';


function App() {
  return (
    <>
        <Router basename="/react-admin">
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/reset-password" element={<ResetPassword />}/>
            <Route path="/main" element={<Main />}/>
          </Routes>
        </Router>
    </>
  )
}

export default App;