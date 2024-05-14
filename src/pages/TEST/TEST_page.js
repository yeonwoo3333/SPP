// import React, { useState } from 'react';
// import './TEST.css'; // 이 경로는 TEST.css 파일이 있는 경로와 일치해야 합니다.

// function TestPage() {
//   const [inputState, setInputState] = useState({
//     value: '',
//     isFocused: false,
//     hasError: false,
//   });

//   const handleFocus = () => {
//     setInputState({
//       ...inputState,
//       isFocused: true
//     });
//   };

//   const handleBlur = () => {
//     setInputState({
//       ...inputState,
//       isFocused: false,
//       hasError: !inputState.value // 여기서 간단한 검증을 합니다. 필요한 검증 로직으로 변경 가능합니다.
//     });
//   };

//   const handleChange = (event) => {
//     setInputState({
//       ...inputState,
//       value: event.target.value
//     });
//   };

//   // 동적으로 클래스를 결정합니다.
//   const inputClassNames = `form_item user ${inputState.isFocused ? 'focus' : ''} ${inputState.hasError ? 'error' : ''}`;

//   return (
//     <div className={inputClassNames}>
//       <input
//         type="text"
//         id="id"
//         name="id"
//         placeholder="아이디"
//         value={inputState.value}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         onChange={handleChange}
//         maxLength="20"
//         autoCapitalize="off"
//       />
//       <div className="id_naver">@naver.com</div>
//     </div>
//   );
// }

// export default TestPage;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';

function Question({ question, onChange, value }) {
  return (
    <div>
      <label>{question.label}</label>
      <input type={question.type} value={value} onChange={onChange} />
    </div>
  );
}

function Controls({ onBack, onNext }) {
  return (
    <div>
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

function SignupForm() {
  const questions = [
    { label: 'What is your name?', type: 'text' },
    { label: 'What is your age?', type: 'number' },
    // Add more questions as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [questions[currentQuestionIndex].label]: e.target.value
    });
  };

  return (
    <div>
      <Question
        question={questions[currentQuestionIndex]}
        value={answers[questions[currentQuestionIndex].label] || ''}
        onChange={handleChange}
      />
      <Controls onBack={handleBack} onNext={handleNext} />
    </div>
  );
}

export default SignupForm;
