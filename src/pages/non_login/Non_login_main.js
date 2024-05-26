import React from 'react';
import NavBar from '../component/NavBar';
import '../Main.css';
import './Non_login.css';
import NonLoginVideo from '../Image/Non_Login_video.mp4';

// 화면 이미지
import IntroductionImage from '../Image/main_page.jpg';

const Main = () => {
  return (
    <div>
      <NavBar />
      
      <div className="image-container">
        <video src={NonLoginVideo} alt="대표 영상" autoPlay loop muted>
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="main-content">
        <section className="section-intro">
          <h2>서비스 소개</h2>
          <p>플래너 서비스 설명 ~~~.</p>
        </section>
        
        <section className="service-list">
          <h2>제공 서비스</h2>
          <ul>
            <li>일정 관리:</li>
            <li>보고서 작성:</li>
            <li>계약 관리:</li>
          </ul>
        </section>
        
        <section className="testimonials">
          <h2>고객 후기</h2>
          <p>"플래너 덕분에 좋았다~!" - 이모씨</p>
        </section>
        
        <section className="additional-info">
          <h2>추가 정보</h2>
          <p>다양한 것들~</p>
        </section>
        
        <footer>
          <p>문의 사항은 연우@planner.com으로 연락 주세요.</p>
        </footer>
      </div>
    </div>
  );
};

export default Main;
