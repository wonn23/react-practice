import { createContext } from "react";

/**
 *  컨텍스트의 초기값을 createContext안에 넣어준다.
 *  context를 적용할 컴포넌트들도 묶어줘야한다.
 */
export const CartContext = createContext({
  items: [],
});
