import React from "react";
import { Link } from 'react-router-dom';
import Main from "../non_login/Non_login_main";

// import "../Main.css"
import "./NavBar.css" //css 가져오기

// 이미지
import LogoIcon from "../Image/logo_4.png"



const NavBar = () => {
    // 페이지 새로고침 함수
    const refreshPage = () => {
      window.location.reload();
    };


  return (
    <nav className="non_login_Main">
      <ul>
        <div className="LOGO">
        <li>
          <Link to="/">
            <img src={LogoIcon} alt="Home" style={{width: '100px', height: '30px'}} onClick={refreshPage} /> {/* 이미지 크기 조절 */}
          </Link>
        </li>
        </div>
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
