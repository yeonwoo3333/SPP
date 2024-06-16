import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLogo from '../Image/logo_4.png';  // 이미지 파일의 정확한 경로를 지정
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

    // 페이지 새로고침 함수
    const refreshPage = () => {
      window.location.reload();
    };
  
  return (
    <nav className={`navbar ${scrollPosition > 50 ? 'navbar-scrolled' : ''}`}>
      {/* Your NavBar content here */}
      <Link to="/">
            <img src={NavBarLogo} alt="Home" style={{width: '200px', height: '60px', margin: '15px'}} onClick={refreshPage} /> {/* 이미지 크기 조절 */}
      </Link>      
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
          <li>
            <Link to ="PlanQ_test">홀랜드 직업 흥미 검사</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
