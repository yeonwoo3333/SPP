import React from "react";
import { Link, Route } from 'react-router-dom';
import "../Main.css";

import "./Non_login.css"
import NavBar from '../component/NavBar';

// 화면 이미지
import IntroductionImage from "../Image/main_page.jpg" 

const Main = () => {
return (
    <div>
        <div>
            <NavBar />
        </div>


    <div className="image-container">
        {/* 소개 화면 이미지 */}
        <img src={IntroductionImage} alt="대표 이미지" />
    </div>

    </div>
);
};

export default Main;
