import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  return (
    /**
     *  createContext를 Header와 Shop을 감싸는 이유는
     *  자식 컴포넌트까지 영향을 컨테스트에 접속할 수 있기 때문이다.
     *  컴포넌트 뒤에 `.` 온점을 찍는 것은 특정 오브젝트 안에 중첩된 속성값이 실질적인 컴포넌트(중첩된 속성의 값이 유효한 리액트 컴포넌트)가 되는 경우 jsx 파일에 유효하다.
     *  컨텍스트를 생성할 때 설정한 기본 값은 Provider 컴포넌트로 감싸지지 않은 컴포넌트가 컨텍스트 값을 액세스하려고 할 때만 사용됩니다.
     *  context value를 useState와 연결시키는 방법은
     */
    <CartContextProvider>
      <Header />
      <Shop>
        <ul id="products">
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </ul>
      </Shop>
    </CartContextProvider>
  );
}

export default App;
