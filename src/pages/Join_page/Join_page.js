import React, { useState } from 'react';

function UsernameInput() {
  const [username, setUsername] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const validateUsername = (value) => {
    // 조건: 길이 6~12, 영문자 및 숫자만 허용
    const regex = /^[A-Za-z0-9]{6,12}$/;
    return regex.test(value);
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // 입력란에 포커스가 있고 사용자가 타이핑을 시작했을 때 테두리 색상을 변경합니다.
  const getBorderColor = () => {
    if (username.length === 0) {
      return isFocused ? 'black' : '#ccc'; // 입력이 없으면 포커스에 따라 색상 결정
    }
    return validateUsername(username) ? 'green' : 'red'; // 유효성 검사 결과에 따라 색상 변경
  };

  const inputStyle = {
    border: `2px solid ${getBorderColor()}`,
  };

  return (
    <div>

        <div className="introduction">
            <h2>안녕하세용 회원가입을 도와드릴까요?</h2>
            <h3>지금바로 개인 맞춤형 로드맵을 생성하고 플래너를 사용하세요.</h3>
        </div>

        <h2>아이디를 입력하세요</h2>
        <input className='ID'
            style={inputStyle}
            type="text"
            value={username}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleInputChange}
            placeholder="아이디를 입력하세요"
        />


    </div>
    

  );
}

export default UsernameInput;
