import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/reset-password" element={<ResetPassword />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;