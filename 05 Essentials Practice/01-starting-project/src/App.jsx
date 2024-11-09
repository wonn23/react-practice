import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

import {useState} from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  // 값이 입력될때마다 상태를 관리해야한다.
  function handleChange(inputIdentifier, newValue) {
    // 기존 상태를 기반으로 업데이트한다. 왜냐하면 handleChange 함수를 실행할 때, 4가지 중 1개만 업데이트 될 것이기 때문이다.
    // 업데이트 된 상태는 반드시 이전 상태를 기반으로 변해야한다.
    // Identifier는 입력된 값이 initailInvestment, anuualInvestment, expectedReturn, duration들 중에 동적으로 설정된다.
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className='center'>Please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
