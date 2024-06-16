import "./Login.css";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); 

 const handleSubmit = (event) => {
  event.preventDefault();
 //   if (rememberMe) {
//    localStorage.setItem('username', username);
 //     localStorage.setItem('password', password);
 //   } else {
  //    localStorage.removeItem('username');
 //     localStorage.removeItem('password');
  //  }
  //  navigate('/nextPage'); 
 };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
   }; 

  // const handleRememberMeChange = (event) => {
  // setRememberMe(event.target.checked);
  // }; 

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="login-body">
        <div className="login-container">
          <h2>Login Page</h2>
          <form id="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleChange}
                required
              />
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            { /* <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                // checked={rememberMe}
               // onChange={handleRememberMeChange}
              />
            <label htmlFor="rememberMe">자동 로그인</label>
            </div> */ }
            <div className="submit-group">
              <input type="submit" value="Login" />
            </div>
            <div className="action-buttons">
              <Link to="/findPassword">아이디/비밀번호 찾기</Link>
              <Link to="/Join_page">회원가입</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
