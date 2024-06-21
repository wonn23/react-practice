export default function Tabs({ children, buttons, ButtonsContainer }) {
  // const ButtonsContainer = buttonsContainer;
  // ButtonsContainer를 대문자로 받아서 바로 컴포넌트로 사용하던지, 소문자로 받아서 변수에 담은 다음 컴포넌트로 사용해야한다.
  //wrapper component 이 컴포넌트는 특정 JSX를 시행하여 HTML구조까지 시행하게 됩니다.
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
