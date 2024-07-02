import './index.css'
import Login from './pages/login_page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPwd from './pages/forgot_password_page';
import PwdRecovery from './pages/password_recovery_page';
import ResetPwd from './pages/reset_password_page';
import PwdRecovered from './pages/password_recovered_page';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-pwd" element={<ForgotPwd />} />
          <Route path="/pwd-recovery" element={<PwdRecovery />} />
          <Route path="/resetpwd" element={<ResetPwd />} />
          <Route path="/pwd-recovered" element={<PwdRecovered />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
