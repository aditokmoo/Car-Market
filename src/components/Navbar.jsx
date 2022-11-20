import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import Login from './Login';
import Register from './Register';
import { HiUserCircle } from 'react-icons/hi';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  
  const auth = getAuth();

  return (
    <>
      <nav>
          <div className="container">
              <div className="nav-section">
                  <h2>Auto <span>Market</span></h2>
                    {auth.currentUser ?
                    <ul className='f-list'>
                      <Link to='/home' className='link'>Home</Link>
                      <Link to='/sell' className='link'>Prodaj</Link>
                      <Link to='/buy' className='link'>Kupi</Link>
                      <Link to='/profile' id='user' className='link'><HiUserCircle id="profile-icon" /> Moj Nalog</Link>
                    </ul>
                    :
                    <ul className='s-list'>
                      <li><Link id='login' onClick={() => setShowLogin(true)}>Prijavi se</Link></li>
                      <li><Link id='register' onClick={() => setShowRegister(true)}>Napravi novi nalog</Link></li>
                    </ul>  
                  }
              </div>
          </div>
      </nav>
      
      <div className={showRegister ? 'overlay show' : 'overlay'}>
        <div className={showRegister ? 'register-modal show' : 'register-modal'}>
          <FaTimes id="closeModal" onClick={() => setShowRegister(false)} />
          <h2>Register</h2>
          <Register onRegisterChange={setShowRegister} loginShow={setShowLogin} />
        </div>
      </div>

      <div className={showLogin ? 'overlay show' : 'overlay'}>
        <div className={showLogin ? 'login-modal show' : 'login-modal'}>
          <FaTimes id="closeModal" onClick={() => setShowLogin(false)} />
          <h2>Uloguj se na nalog</h2>
          <Login onLoginChange={setShowLogin} />
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
    </> 
  )
}

export default Navbar