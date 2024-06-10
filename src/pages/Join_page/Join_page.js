import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Join_page.css';

function JoinPage() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [errors, setErrors] = useState({});

    // 이메일 유효성 검사
    const validateEmail = (email) => {
        const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegExp.test(email);
    };

    // 비밀번호 유효성 검사
    const validatePassword = (password) => {
        return password.length >= 8 && password.length <= 32 &&
               /[A-Z]/.test(password) && /[a-z]/.test(password) &&
               /[!@#$]/.test(password);
    };

    // 첫 번째 단계 검증
    const validateStep1 = () => {
        let formIsValid = true;
        let errors = {};

        if (!validateEmail(email)) {
            errors.email = "유효하지 않은 이메일입니다. 올바른 형식의 이메일을 입력하세요.";
            formIsValid = false;
        }

        setErrors(errors);
        return formIsValid;
    };

    // 두 번째 단계 검증
    const validateStep2 = () => {
        let formIsValid = true;
        let errors = {};

        if (username.length < 5 || username.length > 20) {
            errors.username = "아이디는 5자 이상 20자 이하로 입력해야 합니다.";
            formIsValid = false;
        }

        if (!validatePassword(password)) {
            errors.password = "비밀번호는 8~32자 길이여야 하며, 대소문자와 특수문자(!@#$)를 포함해야 합니다.";
            formIsValid = false;
        }

        if (password !== confirmPassword) {
            errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
            formIsValid = false;
        }

        setErrors(errors);
        return formIsValid;
    };

    // 세 번째 단계 검증
    const validateStep3 = () => {
        let formIsValid = true;
        let errors = {};

        if (nickname.length < 2 || nickname.length > 10) {
            errors.nickname = "닉네임은 2자 이상 10자 이하로 입력해야 합니다.";
            formIsValid = false;
        }

        setErrors(errors);
        return formIsValid;
    };

    // 첫 번째 단계 제출
    const handleSubmitStep1 = (e) => {
        e.preventDefault();
        if (validateStep1()) {
            setStep(2);
        }
    };

    // 두 번째 단계 제출
    const handleSubmitStep2 = (e) => {
        e.preventDefault();
        if (validateStep2()) {
            setStep(3);
        }
    };

    // 최종 제출
    const handleFinalSubmit = (e) => {
        e.preventDefault();
        if (validateStep3()) {
            alert('회원가입 완료');
            navigate('/Non_login_main');
        }
    };

    return (
        <div className="join-page-body">
            <div className="login-container">
                {step === 1 && (
                    <form onSubmit={handleSubmitStep1}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                            placeholder="이메일"
                        />
                        {errors.email && <div className="tooltip">{errors.email}</div>}
                        <button type="submit" className="button button-primary">
                            다음
                        </button>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handleSubmitStep2}>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input-field"
                            placeholder="아이디"
                        />
                        {errors.username && <div className="tooltip">{errors.username}</div>}

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                            placeholder="비밀번호"
                        />
                        {errors.password && <div className="tooltip">{errors.password}</div>}

                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="input-field"
                            placeholder="비밀번호 확인"
                        />
                        {errors.confirmPassword && <div className="tooltip">{errors.confirmPassword}</div>}

                        <button type="submit" className="button button-primary">
                            다음
                        </button>
                    </form>
                )}
                {step === 3 && (
                    <form onSubmit={handleFinalSubmit}>
                        <input
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            className="input-field"
                            placeholder="닉네임"
                        />
                        {errors.nickname && <div className="tooltip">{errors.nickname}</div>}
                        <button type="submit" className="button button-primary">
                            회원가입
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default JoinPage;
