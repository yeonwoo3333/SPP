import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from "../Image/logo_4.png"
import './NavBar.css';

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrollPosition > 50 ? 'navbar-scrolled' : ''}`}>
      {/* Your NavBar content here */}
      <div className="navbar-logo">Logo</div>
      <ul className="navbar-links">
      <div className="Main_Top_Bar_H_right">
          <li>
            <Link to="/login">로그인</Link> {/* '/login'은 실제 로그인 페이지의 경로에 맞게 조정해주세요. */}
          </li>
          <li>
            <Link to="/Join_page">회원가입</Link> {/* '/login'은 실제 로그인 페이지의 경로에 맞게 조정해주세요. */}
          </li>
          <li>
          <Link to="/TEST_page">테스트화면</Link> {/* '/login'은 실제 로그인 페이지의 경로에 맞게 조정해주세요. */}
          </li>
          <li>
          <Link to="/Roadmap_create">로드맵 생성</Link> {/* '/login'은 실제 로그인 페이지의 경로에 맞게 조정해주세요. */}
          </li>
          <li>
            <Link to ="TEST2_page">테스트2화면</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
