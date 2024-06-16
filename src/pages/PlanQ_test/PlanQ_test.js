import React, { useState } from 'react';
import './PlanQ_test.css';

const questions = [
{ text: "밖에서 뛰어노는 걸 좋아한다", type: "현실형" },
{ text: "요리에 관심이 있다", type: "현실형" },
{ text: "기계 조립을 좋아한다", type: "현실형" },
{ text: "몸으로 하는 일에는 자신이 있다", type: "현실형" },
{ text: "가전제품 수리에 관심이 있다", type: "현실형" },
{ text: "채소를 심고 가꾸는 것은 흥미롭다", type: "현실형" },
{ text: "기술자가 되고 싶다", type: "현실형" },
{ text: "설명을 듣는 것보다는 실제로 한번 해 보는 것이 도움이 된다고 생각한다", type: "현실형" },
{ text: "말 수가 적은 편이다", type: "현실형" },
{ text: "운동을 잘한다", type: "현실형" },
{ text: "복잡하고 어려운 말을 들을 때 쉽게 실증이 난다", type: "현실형" },
{ text: "무뚝뚝하다는 말을 자주 듣는다", type: "현실형" },
{ text: "망치나 드라이버 같은 도구를 잘 다룬다", type: "현실형" },
{ text: "말보다 행동이 앞서는 편이다", type: "현실형" },
{ text: "거친 운동이라도 무서워하지 않는다", type: "현실형" },
{ text: "활동적인 놀이를 좋아한다", type: "현실형" },
{ text: "동식물을 관찰하는 것이 흥미롭다", type: "탐구형" },
{ text: "학교에서 배운대로 이론적으로 따지기를 좋아한다", type: "탐구형" },
{ text: "새로운 사실을 연구하는 것이 흥미롭다", type: "탐구형" },
{ text: "학업 성적이 우수하다", type: "탐구형" },
{ text: "과학실에서 실험하는 것은 재밌다", type: "탐구형" },
{ text: "공부할 때 집중력이 강하다", type: "탐구형" },
{ text: "무엇이든 세심하게 관찰하는 습관이 있다", type: "탐구형" },
{ text: "책 읽는 것을 좋아한다", type: "탐구형" },
{ text: "수학 문제를 잘 풀 수 있다", type: "탐구형" },
{ text: "여러 지식에 대해 알아보고 이해하는 것은 재미있다", type: "탐구형" },
{ text: "장기적인 목표를 세우고 꾸준히 공부하는 편이다", type: "탐구형" },
{ text: "과학 연구에 대한 논문을 작성하는 것은 흥미롭다", type: "탐구형" },
{ text: "무엇이든 분석하려는 경향이 있다", type: "탐구형" },
{ text: "공정하고 합리적인 판단을 내리려고 고민한다", type: "탐구형" },
{ text: "학문을 연구하는 학자가 되고 싶다", type: "탐구형" },
{ text: "어떤 말에 몰두하면 누가 불러도 잘 듣지 못한다", type: "탐구형" },
{ text: "미술, 음악 등 예체능 과목을 잘하는 편이다", type: "예술형" },
{ text: "평범한 것보다 개성 있는 것이 좋다", type: "예술형" },
{ text: "좋고 싫음이 분명한 편이다", type: "예술형" },
{ text: "예술적 재능이 있는 사람으로 인정받고 싶다", type: "예술형" },
{ text: "아름다운 것을 보면 쉽게 감동한다", type: "예술형" },
{ text: "상상력이 풍부한 편이다", type: "예술형" },
{ text: "옷을 살 때 남들과 똑같은 것은 사고 싶지 않다", type: "예술형" },
{ text: "직관련이 뛰어난 편이다", type: "예술형" },
{ text: "즉흥적인 여행을 좋아한다", type: "예술형" },
{ text: "시나 소설을 읽거나 쓰는 것을 좋아한다", type: "예술형" },
{ text: "성격이 예민하고 까다로운 편이다", type: "예술형" },
{ text: "틀에 얽메이는 것이 싫다", type: "예술형" },
{ text: "잘 웃고 잘 우는 편이다", type: "예술형" },
{ text: "하고 싶은 일이 있으면 그것을 참기 어렵다", type: "예술형" },
{ text: "미술 전시회나 음악회에 가는 것은 재밌다", type: "예술형" },
{ text: "다른 사람에 비해 독특하고 별난 생각과 행동을 할 때가 많다", type: "예술형" },
{ text: "고민 상담을 잘 해주는 편이다", type: "사회형" },
{ text: "여러 사람이 모이는 곳에 참석하는 것을 좋아한다", type: "사회형" },
{ text: "다름 사람과 대화가 잘 되는 편이다", type: "사회형" },
{ text: "인정이 많은 사람이 되고 싶다", type: "사회형" },
{ text: "어린이들을 귀여워하고 잘 보살핀다", type: "사회형" },
{ text: "상냥하고 친절한 편이다", type: "사회형" },
{ text: "어려운 사람을 보면 불쌍한 마음이 강하게 든다", type: "사회형" },
{ text: "친구의 행동이 왜 그런지 그 마음을 잘 알 수 있다", type: "사회형" },
{ text: "약자를 돕는 단체에서 일하고 싶다", type: "사회형" },
{ text: "주변에 늘 친구가 많다", type: "사회형" },
{ text: "당황한 사람을 편하게 해주려고 노력한다", type: "사회형" },
{ text: "처음 보는 사람과 쉽게 친해진다", type: "사회형" },
{ text: "내가 손해 보더라도 다른 사람에게 좋게 해 주고 싶다", type: "사회형" },
{ text: "남의 생각을 존중해 주려 노력한다", type: "사회형" },
{ text: "다른 사람을 도와주는 것을 좋아한다", type: "사회형" },
{ text: "모임이 행복한 분위기가 되도록 노력한다", type: "사회형" },
{ text: "재치있게 말할 수 있다", type: "진취형" },
{ text: "매사에 적극적인 편이다", type: "진취형" },
{ text: "집단 토론에서 사회자 역할을 잘할 수 있다", type: "진취형" },
{ text: "회장이 되기 위해 선거운동을 한다", type: "진취형" },
{ text: "모임에서 중요한 결정을 내리곤 한다", type: "진취형" },
{ text: "인간관계의 심리를 잘 파악한다", type: "진취형" },
{ text: "리더십이 있다", type: "진취형" },
{ text: "경쟁이 치열할 수록 최선을 다한다", type: "진취형" },
{ text: "승부욕이 강하다", type: "진취형" },
{ text: "상품 판매원이 된다면 잘할 수 있을 것 같다", type: "진취형" },
{ text: "욕심과 야망이 큰 편이다", type: "진취형" },
{ text: "많은 사람 앞에서 내 의견을 잘 발표할 수 있다", type: "진취형" },
{ text: "다른 사람을 잘 설득한다", type: "진취형" },
{ text: "사람들은 나를 똑똑하다고 평가한다", type: "진취형" },
{ text: "게임에서 지거나 양보하는 것을 좋아하지 않는다", type: "진취형" },
{ text: "나의 주장을 쉽게 굽히지 않는 고집이 있다", type: "진취형" },
{ text: "규칙적으로 생활한다", type: "관습형" },
{ text: "조직적이고 체계적인 것이 좋다", type: "관습형" },
{ text: "기분 내키는 대로 행동하지는 않는다", type: "관습형" },
{ text: "변화가 많고 복잡한 것을 좋아하지 않는다", type: "관습형" },
{ text: "노트 필기를 잘한다", type: "관습형" },
{ text: "새로운 음식에는 도전하지 않는다", type: "관습형" },
{ text: "용돈을 계획적으로 사용한다", type: "관습형" },
{ text: "성실한 편이다", type: "관습형" },
{ text: "해야 할 일을 미리 계획하고 잘 지킨다", type: "관습형" },
{ text: "불확실하고 애매한 것을 싫어한다", type: "관습형" },
{ text: "질서를 지키는 것은 중요하다", type: "관습형" },
{ text: "나에게 맡겨진 일을 정확하고 빈틈없이 해낸다", type: "관습형" },
{ text: "시간 약속을 잘 지킨다", type: "관습형" },
{ text: "청소를 잘하고 정리 정돈에 능숙하다", type: "관습형" },
{ text: "세밀하고 꼼꼼하다", type: "관습형" },
{ text: "내 마음대로 말하는 것보다 원칙을 지키며 일하고 싶다", type: "관습형" }
];

function PlanQ_test() {
    const [selectedAnswers, setSelectedAnswers] = useState(Array(Math.ceil(questions.length / 24)).fill(null).map(() => new Set()));
    const [selectedTypes, setSelectedTypes] = useState({});
    const [currentPage, setCurrentPage] = useState(0);

    const handleButtonClick = (index, type) => {
    const newSelectedAnswers = [...selectedAnswers];
    if (newSelectedAnswers[currentPage].has(index)) {
        newSelectedAnswers[currentPage].delete(index);
    } else {
        newSelectedAnswers[currentPage].add(index);
    }
    setSelectedAnswers(newSelectedAnswers);

    setSelectedTypes((prev) => {
        const newTypes = { ...prev };
        if (newSelectedAnswers[currentPage].has(index)) {
        newTypes[type] = (newTypes[type] || 0) + 1;
        } else {
        newTypes[type] -= 1;
        }
        return newTypes;
    });
    };

    const handleNextPage = () => {
    if (currentPage < Math.ceil(questions.length / 24) - 1) {
        setCurrentPage(currentPage + 1);
    } else {
        const sortedTypes = Object.keys(selectedTypes).sort((a, b) => selectedTypes[b] - selectedTypes[a]);
        console.log(`가장 가까운 유형: ${sortedTypes[0]} (${selectedTypes[sortedTypes[0]]}개)`);
        console.log(`두 번째로 가까운 유형: ${sortedTypes[1]} (${selectedTypes[sortedTypes[1]]}개)`);
    }
    };

    const handlePrevPage = () => {
    if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
    }
    };

    const currentQuestions = questions.slice(currentPage * 24, (currentPage + 1) * 24);
    const isNextPageDisabled = selectedAnswers[currentPage].size === 0;

    return (
    <div className="planq-container">
        <button
        className="prev-button"
        onClick={handlePrevPage}
        style={{ position: 'absolute', top: '10px', left: '10px' }}
        disabled={currentPage === 0}
        >
        이전 페이지
        </button>
        <div className="text-area">
        {`Page ${currentPage + 1}`}
        </div>
        <div className="button-area">
        {currentQuestions.map((q, index) => (
            <button
            key={index}
            onClick={() => handleButtonClick(index, q.type)}
            className={selectedAnswers[currentPage].has(index) ? 'selected-button' : 'button'}
            >
            {q.text}
            </button>
        ))}
        </div>
        <button
        className={isNextPageDisabled ? 'submit-button-disabled' : 'submit-button'}
        onClick={handleNextPage}
        disabled={isNextPageDisabled}
        >
        {currentPage < Math.ceil(questions.length / 24) - 1 ? 'Next Page' : '테스트 종료하기'}
        </button>
    </div>
    );
}

export default PlanQ_test;