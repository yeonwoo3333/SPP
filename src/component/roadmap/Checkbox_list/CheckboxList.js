import React, { useState } from 'react';
import './CheckboxList.css'; // CSS 파일 위치 확인 필요

/**
 * CheckboxList 컴포넌트는 여러 개의 체크박스를 렌더링합니다.
 * 각 체크박스는 `options` 배열의 각 항목에 대응됩니다.
 *
 * Props:
 * - options (Array): 체크박스와 라벨에 사용될 데이터 배열. 각 객체는 `value`, `label`, `count` 속성을 가져야 함.
 * - title (String): 컴포넌트 상단에 표시될 제목 문자열.
 */


function CheckboxList({ options, title, selected,onChange  }) {
    // const [selected, setSelected] = useState({});

    // // 전체 선택된 항목의 개수를 파악하기 위한 상태
    // const [isSelected, setIsSelected] = useState(false);

    // const handleChange = (event) => {
    //     const { name, checked } = event.target;
    //     setSelected(prev => ({
    //         ...prev,
    //         [name]: checked
    //     }));

    //     // 최소 하나 이상의 체크박스가 선택되었는지 확인
    //     setIsSelected(Object.values({...selected, [name]: checked}).some(value => value));
    // };

    return (
        <div className="checkbox-list-container">
            <h3>{title}</h3>
            <div className='detailArea'>
                <div className='detailWrap'>
                    <div className='nano'>
                        <div className='nano-content dev-main'>
                            <ul>
                                {options.map(option => (
                                    <li key={option.value}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                className='inp_chk'
                                                name={option.value}
                                                // checked={!!selected[option.value]} 0524_현재 수정 중
                                                checked={selected === option.value}

                                                onChange={()=> onChange(option.value)}
                                                // onChange={handleChange}
                                                // onChange={(e) => onChange(option.value, e.target.checked)} 0524_현재수정중
                                            />
                                            {option.label} ({option.count})
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckboxList;
