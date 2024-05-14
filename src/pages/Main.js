import React from "react";
import { Link, Route } from 'react-router-dom';
import "./Main.css";



const Main = () => {
return (
    <div>
    <div class = "Main_Top_Bar_header_right_hello">
                <ul>
                    <li>
                        <Link to="./d">Home 페이지로 이동</Link>
                    </li>
                    <div class = "Main_Top_Bar_H_right">
                        <li>
                            <a>가이드</a>
                        </li>
                        <li>
                            <a>
                                로그인
                            </a>
                        </li>
                    </div>

                </ul>
            </div>
    </div>
);
};

export default Main;
