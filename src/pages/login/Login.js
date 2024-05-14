import React from "react";
import { Link } from 'react-router-dom';

import "./Login.css"

// Login.js
const Login = () => {
  return (
    <div>
        <div className="login-body">
            <div className ="login-container">
                <h2>Login Page</h2>
                <form id="login-form" action="login.php" method="post">
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <div className="action-buttons">
                    <input type="submit" value="Login" />
                    {/* <a href="#">회원가입</a> */}
                    <Link to="/Join_page">회원가입</Link> {/* '/join'은 실제 로그인 페이지의 경로에 맞게 조정해주세요. */}
                </div>
                </form>
                <div className="forgotten-password">
                    <a href="#">아이디/비밀번호 찾기</a>
                </div>
                <div className="social-buttons">
                    <button className="kakao">카카오 로그인</button>
                    <button className="google">구글 로그인</button>
                    <button className="apple">애플 로그인</button>
                </div>
            </div>
        </div>
        

      {/* 로그인 폼 구현 */}
    </div>
  );
};

export default Login;
