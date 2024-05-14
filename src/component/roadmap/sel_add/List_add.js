import React from 'react';
import CheckboxList from '../Checkbox_list/CheckboxList'; // 올바른 경로로 임포트

function App() {
    const categories = [
        { value: 'cat1', label: '인사·HR', count: 4517 },
        { value: 'cat2', label: '마케팅·광고·MD', count: 3182 },
        { value: 'cat3', label: '개발·데이터', count: 1229 },
        { value: 'cat4', label: '인사·HR', count: 1229 },
        { value: 'cat5', label: '인사·HR', count: 1229 },
        { value: 'cat6', label: '인사·HR', count: 1229 },
        { value: 'cat7', label: '인사·HR', count: 1229 },
        { value: 'cat8', label: '인사·HR', count: 1229 },
        { value: 'cat9', label: '인사·HR', count: 1229 },
        { value: 'cat10', label: '인사·HR', count: 1229 },
        { value: 'cat11', label: '인사·HR', count: 1229 },
        // 카테고리는 따로 빼서 쉽게 추가 가능하게 제작
        // 문제점 1 해당 코드를 컴포넌트화 할 수 있는가?
    ];

    return (
        <div>
            <CheckboxList options={categories} title="카테고리" />
        </div>
    );
}

export default App;