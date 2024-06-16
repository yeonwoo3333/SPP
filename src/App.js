import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Non_login_main from "./pages/non_login/Non_login_main" /* 비로그인 내용 */

import Login from './pages/login/Login'; // 로그인 컴포넌트 임포트

import Join_page from "./pages/Join_page/Join_page"; // 회원가입

import TEST_page from "./pages/TEST/TEST_page"; // 테스트 컴포넌트 임포트

//import Select from "./pages/Roadmap/Job_selection/Job_selection"; // 기초 단계 캐릭터 선택 (추후 위치 변경 예정 0428)
import Select from "./pages/Calendar/Calendar"; // 메인화면 제작 중 (0608)



function App() {
  return (
    <div className="App">

      <Routes>
      <Route path ="/" element={<Non_login_main></Non_login_main>} />
      <Route path ="/login" element={<Login></Login>} />
      <Route path ="/Join_page" element={<Join_page></Join_page>} />
      <Route path ="/TEST_page" element={<TEST_page></TEST_page>} />
      <Route path ="TEST2_page" element={<Select></Select>} />


      </Routes>
    </div>
  );
}

export default App;
