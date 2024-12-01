import { useState, useCallback } from "react";

import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]); // 유저의 대답에 대한 상태관리

  const activeQuestionIndex = userAnswers.length; // 유저의 답변을 저장한 인덱스
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length; // 준비된 질문과 유저가 답변한 문제의 수가 같은지 확인

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

/**
 * useCallback의 필요성
 * Quiz 컴포넌트는 매 렌더링마다 새로운 함수를 생성하게됩니다. 이 경우 하위 컴포넌트인 <Question />에
 * onSelectAnser와 onSkipAnswer 함수가 새로운 참조로 전달됩니다. 만약 useCallback을 사용하지 않으면
 * 매번 새로운 함수가 생성되고, 함수가 변경될 때마다 <Question /> 컴포넌트도 리렌더릴 될 수 있습니다.
 * useCallback을 사용함으로써, handleSelectAnswer와 handleSkipAnswer 함수는 초기 렌더링 시 한번만 생성되고
 * 그 후에는 의존성 배열이 바뀌지 않는 한 동일한 함수 참조를 재사용합니다.
 */

/**
 * 컴포넌트에 key를 작성하는 이유
 * 각 컴포넌트가 어떤 배열 항목에 해당하는지 React가 식별할 수 있도록 한다.
 */
